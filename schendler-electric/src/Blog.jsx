import React, { use, useEffect, useState } from 'react';
import { Box, Typography, Paper, CircularProgress, Fade } from '@mui/material';
import { useUserContext } from './UserContext';

function Blog() {
  const [loading, setLoading] = useState(true);

  const { postsArr } = useUserContext();

  // useEffect(() => {
  //   const timer = setTimeout(() => {setLoading(false)}, 2000); // Simulate loading (slower)
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    console.log("postsArr", postsArr);
    if (postsArr && Object.keys(postsArr).length > 0) {
      console.log("postsArr loaded", postsArr);
      setLoading(false);
    }
  }, [postsArr]);

  return (
    <Box sx={styles.blogContainer}>
      <Typography variant="h3" gutterBottom sx={{ color: '#000', fontWeight: 700, textAlign: 'center', mb: 4, letterSpacing: 1 }}>
        בלוג
      </Typography>
      {loading ? (
        <Fade in={loading} unmountOnExit>
          <Box sx={styles.loadingbox}>
            <CircularProgress size={60} thickness={5} sx={{ color: '#00bcd4', mb: 2 }} />
            <Typography variant="h6" sx={{ color: '#000', mt: 2 }}>טוען פוסטים...</Typography>
          </Box>
        </Fade>
      ) : (
        <Box sx={{}}>
          <Fade in={!loading} timeout={1200}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr',  md: 'repeat(2, 2fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' },
                gap: 4,
                mb: 4,
              }}
            >

              {Object.entries(postsArr).map(([id, post]) => (
                <a
                  key={id}
                  href={`/blog/${id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Paper
                    elevation={6}
                    sx={styles.paper}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transition: 'background 0.2s cubic-bezier(0.4,0,0.2,1)',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.10)',
borderRadius: 4,
                      }}
                      style={{
                        backgroundImage: `url(${post.postUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '40%',
                      }}
                    >
                  
                      
                    </Box>
                    <Box sx={styles.contentBox}>
                      <Typography variant="h6" sx={styles.title} gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" sx={styles.postExcerpt}>
                        { (post.content && post.content[0].content?.slice(0, 80) + '...')}
                      </Typography>
                      {/**Date */}
                      <Typography variant="caption" sx={{ color: '#555', mt: 1 }}>
                        {new Date(post.date).toLocaleDateString('he-IL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
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
    padding: '40px',
    px: { xs: 2, sm: 4, md: 6, lg: 10 },
    direction: 'rtl',
    fontFamily: 'Roboto, sans-serif'
  },
  title: {
    color: '#000',
    fontWeight: 700,
    textAlign: 'right',
    marginBottom: { xs: 2, lg: 3 },
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
    padding:'0px',
    px: 2,
    py:1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'right',
  },
  postTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#19747e',
  },
  postExcerpt: {
    textAlign: 'right',
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
    mx: 'auto',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.5s cubic-bezier(0.4,0,0.2,1), border 0.5s cubic-bezier(0.4,0,0.2,1)',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.03)',
      boxShadow: '0 8px 32px rgba(25,116,126,0.18)',
      backgroundColor: '#f5ff2', // Light gray background on hover
    },
        aspectRatio: '1 / 0.89',
        maxWidth: '600px',
  },


};
