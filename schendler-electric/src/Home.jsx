import React from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar.jsx';
import { Box, Button, Container, Grid, Typography, Paper, TextField, Chip } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import FactoryIcon from '@mui/icons-material/Factory';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import logo from './Images/logo.avif';
import './App.css';
import ImageCarousel from './Components/ImageCarousel.jsx';
import { useUserContext } from './UserContext';

const services = [
  {
    icon: <GavelIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'חוות דעת הנדסיות לבתי משפט ולצדדים בתביעה',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'בוררות והכרעה הנדסית בתחום מתקני החשמל',
  },
  {
    icon: <FactCheckIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'בדיקות מתקני חשמל – על פי תקן ורגולציה',
  },
  {
    icon: <DeviceHubIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'תכנון חשמל לבתי יוקרה – כולל מערכות בית חכם',
  },
  {
    icon: <FactoryIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'תכנון חשמל למבני תעשייה ומסחר',
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'תכנון מתקני חשמל במבני ציבור',
  },
];

const industries = [
  { label: 'Residential', icon: <HomeIcon sx={{ fontSize: 28, color: 'primary.main' }} /> },
  { label: 'Commercial', icon: <BusinessIcon sx={{ fontSize: 28, color: 'primary.main' }} /> },
  { label: 'Smart Home', icon: <DeviceHubIcon sx={{ fontSize: 28, color: 'primary.main' }} /> },
  { label: 'Industrial', icon: <FactoryIcon sx={{ fontSize: 28, color: 'primary.main' }} /> },
];

function Home() {

  
  return (
    <Box id={'electricApp'} sx={{ direction: 'rtl', fontFamily: 'Roboto, sans-serif', background: 'linear-gradient(135deg, #0a2342 0%, #19747e 100%)', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <Box id="top" sx={{ background: 'linear-gradient(120deg, #0a2342 0%, #19747e 100%)', color: 'text.primary', py: { xs: 5, md: 5 }, px: { xs: 4, md: 2 } }}>
        <Container maxWidth="xxl">
          <Grid className={'aboutGrid'} container spacing={6} alignItems="center">
            <Grid size={{ xs: 12 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.2rem', md: '3.2rem' }, color: 'white', lineHeight: 1.1 }}>
                שינדלר אלקטריק בע"מ
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'grey.200', maxWidth: 540, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                תכנון, ייעוץ ובדיקות מתקני חשמל
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'grey.200', maxWidth: 540, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                ברוכים הבאים לאתר הרשמי של שינדלר אלקטריק בע"מ, בהובלת המהנדס חנוך שינדלר – מומחה מנוסה בתחום הנדסת החשמל עם ניסיון של עשרות שנים.
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'grey.200', maxWidth: 540, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                אנו מציעים שירותים מקצועיים בתחום תכנון, ייעוץ, בדיקות חשמל וחוות דעת הנדסיות. שילוב ייחודי של ידע הנדסי וביצועי המבטיח שירות מקיף, איכותי, אמין ומדויק.
              </Typography>

              <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2, fontWeight: 600, px: 4, mg: '0 auto', py: 1.5, fontSize: '1.1rem', boxShadow: 2, letterSpacing: 0.5, background: '#2b8bbd', '&:hover': { background: '#176087' } }}>
                Book a Consultation
              </Button>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* About Us + Services Grid Section */}
      <Box id="about" sx={{ background: 'linear-gradient(180deg, #f7fafc 60%, #eaf1f6 100%)', color: 'text.primary', py: { xs: 5, md: 5 }, px: { xs: 4, md: 2 } }}>
        <Container maxWidth="xxl">
          <Grid className={'aboutGrid'} container spacing={6} alignItems="center">
            {/* About Us Text */}
            <Grid size={{ xs: 12 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a2636' }}>אודות</Typography>
              <Typography variant="body1" sx={{ fontSize: '1.15rem', color: '#2d3a4a', mb: 4 }}>
                חנוך שינדלר – מייסד ומנכ"ל שינדלר אלקטריק בע"מ
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1.15rem', color: '#2d3a4a' }}>
                מהנדס חשמל בוגר הטכניון ובעל תואר MBA מאוניברסיטת תל אביב, חבר לשכת המהנדסים ובעל רישיונות חשמלאי מהנדס וחשמלאי בודק סוג 3.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1.15rem', color: '#2d3a4a' }}>
                בעל ניסיון של למעלה מ-30 שנה בתכנון וביצוע עבודות חשמל מורכבות, פיקוח הנדסי, בדיקות, הכנת מכרזים, כתבי כמויות וייעוץ הנדסי למוסדות ממשלתיים ופרטיים.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1.15rem', color: '#2d3a4a' }}>
                מופיע במאגר המומחים של בתי המשפט ומשמש כעד מומחה בתיקים משפטיים מורכבים, כולל חקירות נגדיות והופעה על דוכן העדים.
              </Typography>
              <br />
              <Typography variant="h4" sx={{ fontWeight: 700, pt:2 }} >
                יתרונות החברה:
              </Typography>
              <ul>
                <li>ניסיון רב-שנים משולב מהתכנון ועד הביצוע</li>
                <li>ראייה כוללת של צורכי הלקוח</li>
                <li>שילוב מומחיות טכנית, משפטית וביצועית</li>
                {/* <li>חוות דעת מומחה</li>
                <li>בוררות הנדסית</li>
                <li>בדיקות מתקני חשמל</li>
                <li>תכנון חשמל לבתי יוקרה עם מערכות בית חכם</li>
                <li>תכנון חשמל לתעשייה, מסחר וציבור

</li> */}
              </ul>
              <Box  id="services" >
<Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a2636', pt:3 }}>שירותים:</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 2 }}>
                {services.map((service) => (
                  <Grid className={'serviceGridItem'} size={{ xs: 12,sm: 6, lg: 4 }} key={service.title}>
                    <Paper elevation={0} sx={{
                      p: 3,
                      borderRadius: 3,
                      background: 'white',
                      color: '#1a2636',
                      minHeight: 140,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
                    }}>
                      {service.icon}
                      <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>{service.title}</Typography>
                    </Paper>
                  </Grid>
                ))}

              </Box>
              </Box>
              
            </Grid>
            {/* Services Grid */}
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0, color: '#1a2636' }}>תעשיות:</Typography>
            <Grid container spacing={2} sx={{ flexDirection: 'row', width: '100%', mt: 2, justifyContent: 'center' }}>
              {industries.map((ind) => (
                <Grid size={{ xs: 6, md: 4 }} key={ind.label} sx={{
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: '#1a2636',
                  borderColor: '#b0bec5',
                  background: '#f3f6fa',
                  justifyContent: 'center',
                  '&:hover': { background: '#e0e7ef', borderColor: '#19747e' }
                }}>
                  {ind.icon && ind.icon}
                  {ind.label}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box id="testimonials" sx={{ py: 5, background: '#f3f6fa', color: '#1a2636' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>לקוחות ממליצים</Typography>
          <Typography>תוכן בקרוב...</Typography>
        </Container>
      </Box>

      {/* Image Carousel */}
      <Box id="gallery" sx={{ py: 5, background: '#eaf1f6', color: '#1a2636' }}>
        <Container maxWidth="xxl">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>גלריית תמונות</Typography>
          <ImageCarousel />
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{
        background: 'linear-gradient(100deg, #1976d2 0%, #21cbf3 100%)',
        color: 'white',
        py: { xs: 6, md: 8 },
        textAlign: 'center',
        boxShadow: 3,
        
      }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Ready to Optimize Your Electrical Systems?
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2, fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', boxShadow: 2, letterSpacing: 0.5, background: '#1a2636', '&:hover': { background: '#19747e' } }}>
          Schedule a Consultation
        </Button>
      </Box>

      {/* Contact Form */}
      <Box id="contact" sx={{ background: 'linear-gradient(180deg, #232f3e 0%, #1a2636 100%)', color: 'white', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Grid container spacing={4} textAlign={'center'} alignContent={'center'} justifyContent={'center'} direction="column">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>Contact Us</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, background: 'rgba(10,35,66,0.98)', color: 'white', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}>
                <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField label="Name" variant="outlined" required fullWidth InputLabelProps={{ style: { color: '#fff' } }} inputProps={{ style: { color: '#fff' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#19747e' }, '&:hover fieldset': { borderColor: '#21cbf3' } } }} />
                  <TextField label="Email" variant="outlined" required fullWidth type="email" InputLabelProps={{ style: { color: '#fff' } }} inputProps={{ style: { color: '#fff' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#19747e' }, '&:hover fieldset': { borderColor: '#21cbf3' } } }} />
                  <TextField label="Message" variant="outlined" required fullWidth multiline rows={4} InputLabelProps={{ style: { color: '#fff' } }} inputProps={{ style: { color: '#fff' } }} sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#19747e' }, '&:hover fieldset': { borderColor: '#21cbf3' } } }} />
                  <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2, fontWeight: 600, mt: 1, letterSpacing: 0.5, background: '#19747e', '&:hover': { background: '#21cbf3', color: '#232f3e' } }}>
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

export default Home;
