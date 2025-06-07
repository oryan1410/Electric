import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Components/ResponsiveAppBar.jsx';
import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <Box id="electricApp" sx={{ direction: 'rtl', fontFamily: 'Roboto, sans-serif', minHeight: '100vh' }}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Box>
  );
}

export default App;
