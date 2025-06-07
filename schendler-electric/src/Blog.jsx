import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Blog() {
  return (
    <Box sx={{ p: 4 }}>
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
  );
}

export default Blog;
