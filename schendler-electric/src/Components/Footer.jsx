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
      {/* <Box>
        <Typography variant="body2">
          Designed by{" "}
          <Link
            href="https://www.linkedin.com/in/aviv-schindler-1b0a4b1b6/"
            sx={{ color: '#ffffff', textDecoration: 'none' }}
          >
            Golan Ana-Aref
          </Link>
        </Typography>
      </Box> */}
      <Box>
        <Typography variant="body2">
          Developed by{" "}
          <Link
            href="https://www.linkedin.com/in/oryan-barnea-56b563268/"
            sx={{ color: '#ffffff', textDecoration: 'none' }}
            target="_blank"
            alt='Oryan Barnea LinkedIn Profile'
            aria-label="Oryan Barnea LinkedIn Profile"
          >
            Oryan Barnea
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;