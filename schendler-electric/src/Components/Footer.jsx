import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';

  return (
    <Box
      sx={{
        direction: 'ltr',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        backgroundColor: '#000000',
        color: '#ffffff',
        py: 2,
        px: 1,
        mt: 'auto', // Push footer to the bottom
        alignItems: 'center',
        justifyContent: 'center', // Center all items as a group
        gap: 3, // Even spacing between items
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography variant="body2">
          All right reserved © Schindler Electric
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          Designed by{" "}
          <Link
            href="https://www.linkedin.com/in/aviv-schindler-1b0a4b1b6/"
            sx={{ color: '#ffffff', textDecoration: 'none' }}
          >
            Golan Ana-Aref
          </Link>
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          Developed by{" "}
          <Link
            href="https://www.linkedin.com/in//"
            sx={{ color: '#ffffff', textDecoration: 'none' }}
          >
            Oryan Barnea
          </Link>
        </Typography>
      </Box>
      <Box>
        <Link
          href={isBlogPage ? '/home' : '/blog'}
          sx={{ color: '#ffffff', textDecoration: 'none' }}
        >
          {/* Optional: Add text or icon here if needed */}
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;