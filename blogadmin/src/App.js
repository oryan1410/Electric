import React, { useState } from 'react';
import './App.css';
import { db } from './firebase_setup/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase_setup/firebase'; // Ensure you have storage initialized



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{direction: 'rtl'}}>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={() => setOpen(true)}>Add Blog</button>
      <BlogCreationForm open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

const BlogCreationForm = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('חנוך שינדלר');
  const [postUrl, setPostUrl] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
  const [blocks, setBlocks] = useState([{ type: 'text', content: '' }]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [jsonOutput, setJsonOutput] = useState(null);

  if (!open) return null;

  const handleBlockChange = (idx, field, value) => {
    setBlocks(blocks =>
      blocks.map((block, i) => {
        if (i !== idx) return block;
        if (field === 'type') {
          if (value === 'text') {
            return { type: 'text', content: '', header: '' };
          } else if (value === 'image') {
            return { type: 'image', url: '', description: '' };
          }
        }
        if (block.type === 'image' && field === 'url') {
          return { ...block, url: value };
        }
        if (block.type === 'text' && (field === 'header' || field === 'content')) {
          return { ...block, [field]: value };
        }
        if (block.type === 'image' && field === 'description') {
          return { ...block, description: value };
        }
        return { ...block, [field]: value };
      })
    );
  };

  const addBlock = () => {
    setBlocks([...blocks, { type: 'text', content: '' }]);
  };

  const removeBlock = idx => {
    setBlocks(blocks => blocks.filter((_, i) => i !== idx));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleConfirm = async () => {
    const blogJson = {
      title,
      author,
      date: date ? date : '',
      postUrl: postUrl ? postUrl : '', // Use postUrl state
      content: blocks,
    };
    setJsonOutput(JSON.stringify(blogJson, null, 2));
    // send blogJson to your backend or save it as needed. using firestore
    console.log('Blog JSON:', blogJson);
    // add to collection in firestore
    const docRef = await addDoc(collection(db, 'Blogs'), blogJson);
    // console.log('Document written with ID: ', docRef.id);
    // Reset form
    setDialogOpen(false);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', minHeight: '100vh',
      background: 'rgba(0,0,0,1)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={styles.formContainer}>
        <h2>Create Blog Post</h2>
        <div style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, display: 'flex', width: '100%', alignItems: 'center' }}>
          <span>כותרת:  </span>
          <input value={title} onChange={e => setTitle(e.target.value)} required style={{ width: '100%', fontSize: '1rem' }} />
        </div>
        <div style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, display: 'flex', width: '100%' }}>
          <span>כותב: </span>
          <input value={author} onChange={e => setAuthor(e.target.value)} required style={{ width: '100%', fontSize: '1rem' }} />
        </div>
        <div style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, display: 'flex', width: '100%' }}>
          <span>תאריך: </span>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required style={{ width: '100%', fontSize: '1rem' }} />
        </div>
        <div style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, display: 'flex', width: '100%' }}>
          <span>תמונה: </span>
          <input
            type='file'
            accept="image/*"
            onChange={async e => {
              const file = e.target.files[0];
              if (!file) return;
              const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
              await uploadBytes(storageRef, file);
              const url = await getDownloadURL(storageRef);
              setPostUrl(url);
            }}
            style={{ width: '100%', fontSize: '1rem', marginTop: 4, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
          />
          
        </div>
        <h3>Content Blocks</h3>
        {blocks.map((block, idx) => (
          <div key={idx} style={{ marginBottom: 12, border: '1px solid #eee', padding: 8, borderRadius: 4 }}>
            <select value={block.type} onChange={e => handleBlockChange(idx, 'type', e.target.value)}>
              <option value="text">Text</option>
              <option value="image">Image</option>
            </select>
            {block.type === 'text' ? (
              <>
                <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, display: 'flex', width: '100%' }}>
                  <span>Header: </span>
                  <input
                    type="text"
                    value={block.header || ''}
                    onChange={e => handleBlockChange(idx, 'header', e.target.value)}
                    placeholder="Section header (optional)"
                    style={{ width: '100%', marginTop: 4, fontSize: '1rem' }}
                  />
                </div>
                <textarea
                  value={block.content}
                  onChange={e => handleBlockChange(idx, 'content', e.target.value)}
                  placeholder="Text content"
                  style={{ width: '100%', minHeight: 90, marginTop: 4, fontSize: '1rem' }}
                  required
                />
              </>
            ) : (
              <div>
                {/* Image picker */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={async e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
                    await uploadBytes(storageRef, file);
                    const url = await getDownloadURL(storageRef);
                    handleBlockChange(idx, 'url', url);
                  }}
                  style={{ marginTop: 4 }}
                />
                <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, display: 'flex', width: '100%' }}>
                  <span>Description: </span>
                  <input
                    type="text"
                    value={block.description || ''}
                    onChange={e => handleBlockChange(idx, 'description', e.target.value)}
                    placeholder="Image description (optional)"
                    style={{ width: '100%', marginTop: 4 }}
                  />
                </div>
              </div>
            )}
            <button type="button" onClick={() => removeBlock(idx)} style={{ marginTop: 4, color: 'red' }}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addBlock} style={{ marginBottom: 16 }}>Add Block</button><br />
        <button type="submit" onClick={handleSubmit}>Save Blog</button>
        <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>Cancel</button>
      </div>
      {dialogOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100 }}>
          <div style={{ background: 'purple', padding: 24, borderRadius: 8, minWidth: 300 }}>
            <h3>Confirm Save</h3>
            <p>Are you sure you want to save this blog post?</p>
            <button onClick={handleConfirm}>Yes, Save</button>
            <button onClick={() => setDialogOpen(false)} style={{ marginLeft: 8 }}>Cancel</button>
          </div>
        </div>
      )}
      {jsonOutput && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1200 }}>
          <div style={{ background: 'purple', padding: 24, borderRadius: 8, minWidth: 300, maxWidth: 600 }}>
            <h3>Blog JSON Output</h3>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', maxHeight: 300, overflowY: 'auto' }}>{jsonOutput}</pre>
            <button onClick={() => setJsonOutput(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  formContainer: {
    borderRadius: 8,
    width: '95%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: 24,
  },
};

export default App;
