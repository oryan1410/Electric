import React from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar.jsx';
import { Box, Button, Container, Grid, Typography, Paper, TextField, IconButton } from '@mui/material';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BoltIcon from '@mui/icons-material/Bolt';
import SecurityIcon from '@mui/icons-material/Security';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeAutomationIcon from '@mui/icons-material/DeviceHub';
import FactoryIcon from '@mui/icons-material/Factory';
import logo from './Images/logo.avif';
import './App.css';

const services = [
  {
    icon: <ElectricalServicesIcon fontSize="large" color="primary" />, 
    title: 'System Design',
    desc: 'Custom electrical system design for homes, buildings, and industry.'
  },
  {
    icon: <VerifiedUserIcon fontSize="large" color="primary" />, 
    title: 'Compliance Guidance',
    desc: 'Expert advice to ensure your projects meet all codes and regulations.'
  },
  {
    icon: <BoltIcon fontSize="large" color="primary" />, 
    title: 'Energy Efficiency',
    desc: 'Planning for optimal energy use and cost savings.'
  },
  {
    icon: <SecurityIcon fontSize="large" color="primary" />, 
    title: 'Safety Audits',
    desc: 'Comprehensive safety checks and risk assessments.'
  },
];

const industries = [
  { icon: <HomeWorkIcon color="secondary" />, label: 'Residential' },
  { icon: <ApartmentIcon color="secondary" />, label: 'Commercial' },
  { icon: <HomeAutomationIcon color="secondary" />, label: 'Smart Homes' },
  { icon: <FactoryIcon color="secondary" />, label: 'Industrial' },
];

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Roboto, sans-serif', background: 'linear-gradient(135deg, #788AA3 0%, #6e8e8a 100%)', minHeight: '100vh' }}>
      <ResponsiveAppBar />
      {/* Hero Section */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
        color: 'white',
        textAlign: 'center',
        boxShadow: 3,
        px: 2,
        py: 8,
        backgroundImage: `url(${logo})`,
        boxSizing: 'cover',
      }}>
        <img src={logo} alt="Schendler Electric Logo" style={{ width: 120, height: 'auto', marginBottom: 20 }} />
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>
          Powering the Future, Today
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Electrical Consulting for Modern Homes, Buildings & Industry
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 8, boxShadow: 2, fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
          Book a Consultation
        </Button>
      </Box>

      {/* About Us */}
      <Container className='aboutContainer' sx={{ direction: 'rtl'}}>
        <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, background: 'transparent', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)' }}>

<h1 style={styles.aboutHeader}>שינדלר אלקטריק בע"מ</h1>
<p style={styles.aboutSubHeader}>תכנון, ייעוץ ובדיקות מתקני חשמל</p>
          <Typography variant="body1" sx={{ fontSize: '1.15rem', color: 'text.secondary' }}>
ברוכים הבאים לאתר הרשמי של שינדלר אלקטריק בע"מ, בהובלת המהנדס חנוך שינדלר – מומחה מנוסה בתחום הנדסת החשמל עם ניסיון של עשרות שנים.

אנו מציעים שירותים מקצועיים בתחום תכנון, ייעוץ, בדיקות חשמל וחוות דעת הנדסיות. שילוב ייחודי של ידע הנדסי וביצועי המבטיח שירות מקיף, איכותי, אמין ומדויק.
      <h2>התמחויות עיקריות:</h2>
<ul>
  <li>חוות דעת מומחה</li>
  <li>בוררות הנדסית</li>
  <li>בדיקות מתקני חשמל</li>
  <li>תכנון חשמל לבתי יוקרה עם מערכות בית חכם</li>
  <li>תכנון חשמל לתעשייה, מסחר וציבור</li>
</ul>
          </Typography>
        </Paper>
      </Container>

      {/* Services Offered */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 600, mb: 4, color: 'primary.main' }}>Services Offered</Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {services.map((service, idx) => (
            <Grid item xs={6} sm={6} md={6} key={service.title} sx={{ display: 'flex' }}>
              <Paper elevation={4} sx={{
                p: 3,
                width: '100%',
                borderRadius: 4,
                textAlign: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width:'500px',
                flex: 1,
                background: 'rgba(255,255,255,0.97)',
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: '0 6px 24px 0 rgba(0,0,0,0.13)' }
              }}>
                {service.icon}
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>{service.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>{service.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Clients/Industries */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 600, mb: 4, color: 'primary.main' }}>Industries Served</Typography>
        <Grid container spacing={3} justifyContent="center">
          {industries.map((ind) => (
            <Grid item xs={6} sm={3} key={ind.label}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3, textAlign: 'center', background: 'rgba(245,247,250,0.97)' }}>
                {ind.icon}
                <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 500 }}>{ind.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{
        background: 'linear-gradient(100deg, #1976d2 0%, #21cbf3 100%)',
        color: 'white',
        py: 7,
        textAlign: 'center',
        boxShadow: 3,
        mb: 8,
      }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Ready to Power Up Your Project?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
          Schedule a consultation with our experts today.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ borderRadius: 8, fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', boxShadow: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
          Book a Consultation
        </Button>
      </Box>

      {/* Contact Form */}
      <Container maxWidth="sm" sx={{ mb: 10 }}>
        <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, background: 'rgba(255,255,255,0.98)' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>Contact Us</Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" variant="outlined" required fullWidth />
            <TextField label="Email" variant="outlined" required fullWidth type="email" />
            <TextField label="Message" variant="outlined" required fullWidth multiline rows={4} />
            <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 6, fontWeight: 600, mt: 1 }}>
              Send Message
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default App;


const styles = {
  aboutHeader: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#000000',
  },
  aboutSubHeader: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#000000',
        fontWeight: 'bold',

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
};