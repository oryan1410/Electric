import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Components/ResponsiveAppBar.jsx';
import Home from './Home';
import Blog from './Blog';
import Footer from './Components/Footer.jsx';
import PostPage from './PostPage.jsx'; // Assuming you have a PostPage component

function App() {

return (
  <Box
    id="electricApp"
    sx={{
      direction: 'rtl',
      fontFamily: 'Roboto, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <ResponsiveAppBar />
    <Box sx={{ flex: 1 }}>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Box>
    <Footer />
  </Box>
);
}

export default App;
