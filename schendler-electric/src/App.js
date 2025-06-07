import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Components/ResponsiveAppBar.jsx';
import Home from './Home';
import Blog from './Blog';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <Box id="electricApp" sx={{ direction: 'rtl', fontFamily: 'Roboto, sans-serif', minHeight: '100vh' }}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Box>
  );
}

export default App;
