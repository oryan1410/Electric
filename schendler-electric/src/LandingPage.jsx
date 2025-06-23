import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import TestimonailCarousel from './Components/TestimonailCarousel.jsx'; // Adjust the import path as necessary
import ImageCarousel from './Components/ImageCarousel';
import GavelIcon from '@mui/icons-material/Gavel';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FactoryIcon from '@mui/icons-material/Factory';
import { Container } from '@mui/system';

const features = [
    {
        title: 'ייעוץ ותכנון',
        desc: 'תכנון חשמל לפרויקטים יוקרתיים, מערכות בית חכם, אזעקה, גילוי אש ובקרת מבנים, מתקנים תעשייתיים ומערכות גיבוי.',
        icon: (
            <Box
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #19747e 60%, #43c6ac 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1,
                }}
            >
                <GavelIcon sx={{ fontSize: 32, color: '#fff' }} />
            </Box>
        ),
    },
    {
        title: 'בדיקות ואישורים',
        desc: 'בדיקות חשמל שוטפות, חוות דעת לאחר שריפה ונזקי חשמל, אישורים לרישוי עסקים.',
        icon: (
            <Box
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #19747e 60%, #43c6ac 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1,
                }}
            >
                <FactCheckIcon sx={{ fontSize: 32, color: '#fff' }} />
            </Box>
        ),
    },
    {
        title: 'חוות דעת מומחה',
        desc: 'עדות מומחה בבית המשפט בתביעות חשמל, חוות דעת מקצועית לחברות ביטוח.',
        icon: (
            <Box
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #19747e 60%, #43c6ac 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1,
                }}
            >
                <HandshakeIcon sx={{ fontSize: 32, color: '#fff' }} />
            </Box>
        ),
    },
    {
        title: 'ביצוע ופיקוח',
        desc: 'ניהול ופיקוח על עבודות חשמל, פתרון Turn‑Key או הפרדת תכנון וביצוע לפי הצורך.',
        icon: (
            <Box
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #19747e 60%, #43c6ac 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1,
                }}
            >
                <FactoryIcon sx={{ fontSize: 32, color: '#fff' }} />
            </Box>
        ),
    },
];

export default function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e0f7fa 0%, #fff 100%)',paddingBottom: 0,paddingTop:4 }}>
      {/* Hero */}
      <Box sx={{ textAlign: 'center', mb: 8, px:2 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, color: '#19747e', mb: 2 }}>
          ברוכים הבאים לשינדלר אלקטריק
        </Typography>
        <Typography variant="h5" sx={{ color: '#333', mb: 4 }}>
          פתרונות חשמל מתקדמים לבית ולעסק, עם שירות אישי ומקצועי.
        </Typography>
        <a href ="tel:054-1234567" style={{padding:'15px' ,background: '#19747e', color: '#fff', px: 5, py: 1.5, fontSize: 20, textDecoration: 'none', borderRadius: 4 }}>
          צרו קשר עכשיו 📞 054-1234567 
        </a>
      </Box>

      {/* Features */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 5, px:2 }}>
        {features.map((f, i) => (
          <Grid size={{xs:12 ,md:6}} key={i}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 4, minHeight:248, justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h3" sx={{ mb: 2 }}>{f.icon}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{f.title}</Typography>
              <Typography sx={{ color: '#555' }}>{f.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* About */}
      <Box sx={{ mx: 'auto', mb: 5, textAlign: 'center', px:2 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#19747e', mb: 2 }}>
          למה לבחור בנו?
        </Typography>
        <Typography sx={{ color: '#444', fontSize: 18 }}>
          בשינדלר אלקטריק אנו שמים דגש על שירות אישי, מקצועיות ללא פשרות ועמידה בלוחות זמנים. אנו מלווים את לקוחותינו משלב התכנון ועד לסיום העבודה, ודואגים לשקט הנפשי שלכם.
        </Typography>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ mx: 'auto', justifyContent: 'center', px:2  }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#19747e', mb: 0, textAlign: 'center' }}>
          מה הלקוחות שלנו אומרים?
        </Typography>
        <TestimonailCarousel />
      </Box>

      {/* Image Carousel Section */}
      <Box sx={{mx: 'auto'}}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#19747e', textAlign: 'center', mb:0 }}>
          פרויקטים ותמונות מהשטח
        </Typography>
        <ImageCarousel />
      </Box>

          {/* Contact Form */}
      <Box id="contact" sx={{ background: 'linear-gradient(180deg, #232f3e 0%, #1a2636 100%)', color: 'white', py: { xs: 6, md: 10 } }}>
          <Grid container textAlign={'center'} alignContent={'center'} justifyContent={'center'} direction="column">
            <Grid size={{ xs: 12}}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>צור קשר</Typography>
            </Grid>
            <p>מעוניינים בשירותי ייעוץ, תכנון, בדיקה או חוות דעת? נשמח לעמוד לשירותכם:</p>
            <p>טלפון: &nbsp;
            <a href="tel:0508689068" style={{ color: '#21cbf3', textDecoration: 'none', fontWeight: 600 }}>
              050-8689068 
            </a>
            </p>
            <p>מייל:&nbsp;
              <a href="mailto:hanoch2277@gmail.com" style={{ color: '#21cbf3', textDecoration: 'none' }}>
                hanoch2277@gmail.com
              </a>
            </p>
            {/* <Grid size={{ xs: 12, md: 8 }}>
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
            </Grid> */}
          </Grid>
      </Box>
    </Box>
  );
}
