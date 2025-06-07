import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Blog() {
  return (
    <>
      <Box sx={{ p: 4, direction: 'rtl', fontFamily: 'Roboto, sans-serif' }}>
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6">Articles coming soon...</Typography>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Podcast player will be here</Typography>
        </Paper>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {[1, 2, 3].map((id) => (
            <a
              key={id}
              href={`/blog/${id}`}
              style={{ textDecoration: 'none' }}
            >
              <Paper
                elevation={6}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  minHeight: 420,
                  maxWidth: 320,
                  mx: 'auto',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: '0 8px 32px rgba(33,150,243,0.18)',
                    background: 'linear-gradient(135deg, #bbdefb 0%, #e3f2fd 100%)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 140,
                    background: 'linear-gradient(120deg, #90caf9 60%, #42a5f5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Author pic (tiny pic) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -20,
                      right: 24,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      border: '2px solid #2196f3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Replace with <img src={authorPicUrl} ... /> if available */}
                    <Typography variant="subtitle1" color="#2196f3" fontWeight={700}>
                      A
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h6" sx={{ mb: 1, textAlign: 'center', fontWeight: 700 }}>
                    Blog Post Title {id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur...
                  </Typography>
                </Box>
              </Paper>
            </a>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Blog;
