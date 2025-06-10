import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Assuming you have a CSS file for styles

const pages = [
  { label: 'אודות', path: '#about' },
  { label: 'שירותים', path: '#services' },
  { label: 'לקוחות ממליצים', path: '#testimonials' },
  { label: 'צור קשר', path: '#contact' },
  { label: 'Blog', path: '/blog' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isBlogPage = location.pathname.startsWith('/blog');
  const resolvePath = (path) => {
    if (path.startsWith('#')) {
      return isBlogPage ? `/home${path}` : path;
    }
    return path;
  };

  return (
    <AppBar sx={{backgroundColor:'#000000', height:"78px", maxWidth:'100%'}} position='sticky'>
      <Container maxWidth="xxl" sx={{ height: '100%' }}>
        <Toolbar disableGutters sx={{ height: '100%' }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={isBlogPage ? '/home' : '#'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }, // Collapse at 600px instead of 900px
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src='https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png' alt="" />
          </Typography>
          <Box sx={{ height:'100%',flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ alignItems: 'center', height: '100%' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
              }}
              transitionDuration={500}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: '#0a2540', // Custom dark blue
                    color: '#fff', // White text
                    borderRadius: 0,
                    boxShadow: 6,
                    width: '100%',
                    minWidth: '100%', // Ensures full width on mobile
                    left: 0,
                    right: 0,
                    padding:'10px',
                    textAlign:'right'
                  }
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={resolvePath(page.path)}
                  sx={{ justifyContent: 'center', textAlign: 'center', width: '100%' }}
                >
                  <Typography sx={{ width: '100%', textAlign: 'center', m: 0 }}>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                component={Link}
                to={resolvePath(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

const styles={
  menu:{
    backgroundColor:'red'
  }
}