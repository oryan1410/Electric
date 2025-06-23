import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Components/ResponsiveAppBar.jsx';
import Home from './Home';
import Blog from './Blog';
import Footer from './Components/Footer.jsx';
import PostPage from './PostPage.jsx'; // Assuming you have a PostPage component
import { useUserContext } from './UserContext.js';
import LandingPage from './LandingPage.jsx';

function App() {

  const location = useLocation();
  const { navbarVisable, setNavbarVisible } = useUserContext();

  useEffect(() => {
    // Hide the navbar on blog pages
    if (location.pathname.startsWith('/landing')) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  }, [location.pathname, setNavbarVisible]);

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
    {navbarVisable &&<ResponsiveAppBar /> }
    <Box sx={{ flex: 1 }}>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Box>
    <Footer />
  </Box>
);
}

export default App;
