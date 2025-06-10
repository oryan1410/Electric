import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Fade } from '@mui/material';
import { useUserContext } from './UserContext';

function Blog() {
  const [loading, setLoading] = useState(true);

  const { texttext } = useUserContext(); // Example usage of UserContext
  console.log(texttext); // Log the value from UserContext

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200); // Simulate loading (slower)
    return () => clearTimeout(timer);
  }, []);

  // Demo posts (replace with real data later)
  const posts = [
    {
      id: 1,
      title: 'כותרת פוסט ראשון',
      excerpt: 'תקציר קצר של הפוסט הראשון. כאן יופיעו כמה שורות שמסבירות על התוכן.',
      author: 'יונתן',
      authorPicUrl: '',
    },
    {
      id: 2,
      title: 'פוסט שני לדוגמה',
      excerpt: 'פסקה קצרה שמסבירה על הפוסט השני. מידע מעניין וחשוב.',
      author: 'דנה',
      authorPicUrl: '',
    },
    {
      id: 3,
      title: 'פוסט שלישי',
      excerpt: 'עוד פוסט בבלוג עם תקציר קצר. המשך קריאה יוביל לעמוד הפוסט.',
      author: 'אבי',
      authorPicUrl: '',
    },
  ];

  return (
    <Box sx={styles.blogContainer}>
      <Typography variant="h3" gutterBottom sx={{ color: '#fff', fontWeight: 700, textAlign: 'center', mb: 4, letterSpacing: 1 }}>
        בלוג
      </Typography>
      {loading ? (
        <Fade in={loading} unmountOnExit>
          <Box sx={styles.loadingbox}>
            <CircularProgress size={60} thickness={5} sx={{ color: '#00bcd4', mb: 2 }} />
            <Typography variant="h6" sx={{ color: '#fff', mt: 2 }}>טוען פוסטים...</Typography>
          </Box>
        </Fade>
      ) : (
        <Box sx={{  }}>
          <Fade in={!loading} timeout={1200}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 4,
                mb: 4,
              }}
            >
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Paper
                    elevation={6}
                    sx={styles.paper}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: 140,
                        background: 'linear-gradient(120deg, #19747e 60%, #232f3e 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transition: 'background 0.2s cubic-bezier(0.4,0,0.2,1)',
                      }}
                    >
                      {post.authorPicUrl ? (
                        <Box
                          component="img"
                          src={post.authorPicUrl}
                          alt={post.author || 'author'}
                          sx={styles.authorPic}
                        />
                      ) : (
                        <Box sx={styles.authorInitial}>
                          <Typography variant="subtitle1" color="#19747e" fontWeight={700}>
                            {post.author ? post.author[0] : '?'}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    <Box sx={styles.contentBox}>
                      <Typography variant="h6" sx={styles.title} gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="#b2ebf2" sx={styles.postExcerpt}>
                        {post.excerpt}
                      </Typography>
                    </Box>
                  </Paper>
                </a>
              ))}
            </Box>
          </Fade>
        </Box>
      )}
    </Box>
  );
}

export default Blog;

const styles = {
  blogContainer: {
    minHeight: '82.2dvh',
    background: 'linear-gradient(120deg, #0a2342 0%, #19747e 100%)',
    padding: '20px',
    direction: 'rtl',
    fontFamily: 'Roboto, sans-serif'
  },
  title: {
    color: '#fff',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '40px',
    letterSpacing: '1px'
  },
  authorPic: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '2px solid #19747e',
    objectFit: 'cover',
    position: 'absolute',
    bottom: -20,
    right: 24,
  },
  authorInitial: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '2px solid #19747e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    bottom: -20,
    right: 24,
  },
  contentBox: {
    padding: '30px',
    marginBottom: '20px',
    flex: 1,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  postTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#19747e',
  },
  postExcerpt: {
textAlign:'center',
  },
  loadingbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
  },
  paper: {
    borderRadius: 4,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                      minHeight: 420,
                      maxWidth: 320,
                      mx: 'auto',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                      transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.5s cubic-bezier(0.4,0,0.2,1)',
                      cursor: 'pointer',
                      backgroundColor: '#24676e',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.03)',
                        boxShadow: '0 8px 32px rgba(25,116,126,0.18)',
                        backgroundColor: '#19747e',
                      },
  },

};
