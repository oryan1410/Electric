import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
// ResponsiveAppBar.jsx

const pages = [
  { label: 'אודות', path: '#about' },
  { label: 'שירותים', path: '#services' },
  { label: 'לקוחות ממליצים', path: '#testimonials' },
  { label: 'צור קשר', path: '#contact' },
  { label: 'Blog', path: '/blog' },
];

function ResponsiveAppBar() {

    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -260; // Adjust this value to match your AppBar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const isBlogPage = location.pathname.startsWith('/blog');
  const [isExpanded, setIsExpanded] = useState(false);

  const resolvePath = (path) => {
    if (path.startsWith('#')) {
      return isBlogPage ? `/home${path}` : path;
    }
    return path;
  };

  function handleToggle() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Navbar bg="black" variant="dark" expand="md" sticky="top" expanded={isExpanded} onToggle={handleToggle} style={{ padding: '10px 0' }}>
      <Container fluid style={{ direction: 'rtl', maxWidth: '100%', margin: '0 auto' }}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
        <Navbar.Brand as={Link} to={isBlogPage ? '/home' : '#'} >
          <img
            src="https://static.wixstatic.com/media/3161de_c9120ca62eac492b8ef88d8142d80918~mv2.png/v1/fill/w_198,h_77,al_c,lg_1,q_85,enc_avif,quality_auto/logo.png"
            alt="Logo"
            style={{ maxWidth: '100px' }}
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" style={styles.Collapse}>
          <Nav >
            {pages.map((page) => (
              <Nav.Link
                key={page.label}
                as={Link}
                to={resolvePath(page.path)}
                style={{ color: 'white', fontWeight: 'bold' }}
                onClick={() => setIsExpanded(false)} // Close the menu on click
              >
                {page.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveAppBar;

const styles = {
  Collapse: {
    textAlign:'center',
    justifyContent: 'flex-start',
  
  },
};