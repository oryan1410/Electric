import React from 'react';
import ResponsiveAppBar from './Components/ResponsiveAppBar.jsx';
import { Box, Button, Container, Grid, Typography, Paper, TextField, Chip, Fade } from '@mui/material';
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
import TestimonailCarousel from './Components/TestimonailCarousel.jsx';
import { useUserContext } from './UserContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const services = [
  {
    category: 'ייעוץ ותכנון',
    items: [
      'תכנון חשמל לפרויקטים יוקרתיים (וילות חכמות ואולפני הקלטות)',
      'תכנון מערכות בית חכם, אזעקה, גילוי אש ובקרת מבנים',
      'תכנון מתקנים תעשייתיים ומערכות גיבוי גנרטורים',
    ],
    icon: <GavelIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    category: 'בדיקות ואישורים',
    items: [
      'בדיקות חשמל שוטפות (מתקני חשמל, גנרטורים, ואירועים מיוחדים)',
      'חוות דעת לאחר שריפה ונזקי חשמל למטרות ביטוח',
      'אישורים לרישוי עסקים.',
    ],
    icon: <FactCheckIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    category: 'חוות דעת מומחה',
    items: [
      'עדות מומחה בבית המשפט בתביעות חשמל',
      'חוות דעת מקצועית לחברות ביטוח',
    ],
    icon: <HandshakeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    category: 'ביצוע ופיקוח',
    items: [
      'ניהול ופיקוח על עבודות חשמל באמצעות קבלני משנה',
      'פתרון Turn‑Key או הפרדת תכנון וביצוע לפי הצורך',
    ],
    icon: <FactoryIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const industries = [
  { label: 'וילות ובית חכם', icon: <HomeIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://firebasestorage.googleapis.com/v0/b/electric-5c719.firebasestorage.app/o/Pictures%2FWhatsApp%20Image%202025-06-22%20at%204.32.18%20AM.jpeg?alt=media&token=44bf5fa6-8fc8-429f-beb9-91e40ff7323d' },
  { label: 'אולפן פודקאסט', icon: <BusinessIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://podspotters.com/wp-content/uploads/jet-form-builder/0f3fd53cb26beaadd824d6741af36d6e/2025/02/91-1.jpg' },
  { label: 'מפעל מאיר בייגל', icon: <DeviceHubIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSLFID2rw2YJoZdUgTqIPYA1sIMti8Pl9Xw&s' },
  { label: 'ממגורות אשדוד', icon: <FactoryIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://firebasestorage.googleapis.com/v0/b/electric-5c719.firebasestorage.app/o/projectPics%2F50_L.jpg?alt=media&token=b7f3349c-e199-403e-8dce-cf7b66e35f25' },
  { label: 'טקס הדלקת המשואות', icon: <AccountBalanceIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://firebasestorage.googleapis.com/v0/b/electric-5c719.firebasestorage.app/o/projectPics%2F6c8f1c385c7f4c5763d5941fb6b09844.jpg?alt=media&token=81c53cdf-9646-40fd-813f-76310e0074c3' },
  { label: 'מתקני חשמל תעשייתיים', icon: <DeviceHubIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://firebasestorage.googleapis.com/v0/b/electric-5c719.firebasestorage.app/o/Pictures%2F20180527_112331.jpg?alt=media&token=14896b59-56cd-4ff7-9f2e-3b602199db89' },
];

function Home() {

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);


  return (
    <Box id={'electricApp'} sx={{ direction: 'rtl', fontFamily: 'Roboto, sans-serif', background: 'linear-gradient(135deg, #0a2342 0%, #19747e 100%)', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <Box id="top" sx={styles.heroBox}>
        <Container maxWidth="xxl">
          <Grid className={'aboutGrid'} container spacing={6} alignItems="center">
            <Grid sx={{ flexDirection: 'column', display: 'flex' }} size={{ xs: 12 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.2rem', md: '3.2rem' }, color: 'white', lineHeight: 1.1 }}>
                שינדלר אלקטריק בע"מ
              </Typography>
              <Typography variant="p" sx={{ mb: 0, color: 'grey.200', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                מעל 40 שנות מורשת  משפחתית בתכנון, ייעוץ ובדיקות חשמל
              </Typography>
              <Typography variant="p" sx={{ mb: 2, color: 'grey.200', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                תכנון מדויק • פיקוח מקצועי • חוות דעת מומחה
              </Typography>

              <Nav.Link

                as={Link}
                to={`#contact`}
                style={{ padding: '10px', textAlign: 'center', borderRadius: '10px', color: 'white', fontWeight: 'bold', maxWidth: 540, fontWeight: 600, px: 4, mg: '0 auto', py: 1.5, fontSize: '1.1rem', boxShadow: 2, letterSpacing: 0.5, backgroundColor: '#0078d7', '&:hover': { background: '#176087' } }}
                sx={{}}
                onScroll={() => window.scrollTo({ top: document.getElementById('testimonials').offsetTop, behavior: 'smooth' })}
              >
                ליצירת קשר
              </Nav.Link>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* About Us + Services Grid Section */}
      <Box id="about" sx={styles.aboutBox}>
        <Container maxWidth="xxl">
          <Grid className={'aboutGrid'} container gap={3} spacing={6} alignItems="center">
            {/* About Us Text */}
            <Grid size={{ xs: 12 }}>
              <Grid container size={{ xs: 12, md: 10 }} spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', margin: '0 auto', minHeight: 480 }}>
                <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', objectFit: 'cover' }}>
                  <img src={'https://firebasestorage.googleapis.com/v0/b/electric-5c719.firebasestorage.app/o/WhatsApp%20Image%202025-06-22%20at%204.04.02%20AM.jpeg?alt=media&token=5bd5ef31-60e0-418a-af99-84d2932cb8e1'} aria-label='Nahum Schindler Picture' alt="Nahum Schindler Picture" style={styles.aboutPic} />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} sx={{ background: 'linear-gradient(135deg, #0a2342 0%, #19747e 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 700, color: '#fff', minHeight: 480, padding: 3, borderRadius: 2, boxShadow: '0 4px 32px rgba(0,0,0,0.25)' }}>
                  <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>
                    חנוך שינדלר, מהנדס חשמל בוגר הטכניון, הבעלים של שינדלר אלקטריק בע"מ, ממשיך מסורת משפחתית בת עשרות שנים. <br /> <br />
                    למעלה מ-30 שנות ניסיון בתכנון, ניהול, פיקוח, בדיקות וביצוע של מתקנים תעשייתיים, וילות יוקרה ופרויקטים מורכבים אחרים.
                  </Typography>
                  <br />
                  <Typography variant="body2" sx={{ fontSize: '1.3rem' }}>
                    בעל רישיון חשמלאי בודק סוג 3, משמש כעד מומחה וכבורר מטעם בתי משפט וחברות ביטוח, מספק חוות דעת הנדסיות כחוקר נזקי חשמל עקב שריפות, הצפות, נזקי מלחמה ופעולות איבה ורשלנות מקצועית.
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h4" sx={{ fontWeight: 700, pt: 2, mt: 3 }} >
                היתרונות שלנו
              </Typography>
              <ul>
                <li style={styles.projectDiv}>
                  <span style={styles.bulletPointHeader}>פתרון מקיף: </span>
                  <span>ייעוץ, תכנון וביצוע בפיקוח קפדני</span>
                </li>
                <li style={styles.projectDiv}>
                  <span style={styles.bulletPointHeader}>מומחיות משפטית: </span>
                  <span>חוות דעת מוכרת בבתי משפט ובחברות ביטוח</span>
                </li>
                <li style={styles.projectDiv}>
                  <span style={styles.bulletPointHeader}>תגובה מהירה: </span>
                  <span>יחס אישי, זמינות וגמישות לוחות זמנים</span>
                </li>
                <li style={styles.projectDiv}>
                  <span style={styles.bulletPointHeader}>אירועים ייחודיים: </span>
                  <span>בדיקות חשמל בטקס הדלקת המשואות בהר הרצל (6 שנים ברציפות)</span>
                </li>
                <li style={styles.projectDiv}>
                  <span style={styles.bulletPointHeader}>"תפירת" פרוייקטים ייחודיים לפי מידה: </span>
                  <span>גמישות, מעורבות אישית והתאמה לצרכי הלקוח</span>
                </li>
              </ul>
            </Grid>

            {/*Services Grid */}
            <Grid size={{ xs: 12 }}>
              <Box id="services" >
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a2636', pt: 3, textAlign: 'center' }}>שירותים עיקריים:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4,rowGap:2, justifyContent: 'center', mt: 3.5 }}>
                  {services.map((service) => (
                    <ServiceCard key={service.category} service={service} />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Indutries Grid */}
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a2636', mt: 3 }}>פרויקטים נבחרים:</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                alignItems: 'flex-start',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '320px',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  mt: { xs: 2, md: 0 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 320,
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                style={styles.selectedItemDiv}
              >
                <AnimatedIndustryContent key={selectedIndustry.label} industry={selectedIndustry} selectedIndustry={selectedIndustry} />
              </Box>
              <Grid
                container
                spacing={2}
                sx={{
                  flex: 1,
                  minWidth: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  height: '100%',
                }}
              >
                {industries.map((ind) => (
                  <IndustryCard key={ind.label} selected={selectedIndustry === ind} industry={ind} onClick={() => setSelectedIndustry(ind)} />
                ))}
              </Grid>

            </Box>
          </Grid>
        </Container>
      </Box>

      { /* Testimonials Section */}
      <Box id="testimonials" sx={{ py: 5,px:2, background: '#f3f6fa', color: '#1a2636' }}>
        <Container maxWidth="xxl">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, textAlign:'center' }}>לקוחות ממליצים</Typography>
          <TestimonailCarousel />
        </Container>
      </Box>

      {/* Image Carousel */}
      <Box id="gallery" sx={{ py: 5, background: '#eaf1f6', color: '#1a2636' }}>
        <Container maxWidth="xxl">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, px:2 }}>גלריית תמונות</Typography>
          <ImageCarousel />
        </Container>
      </Box>

      {/* Call to Action */}
      {/* <Box sx={{
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
      </Box> */}

      {/* Contact Form */}
      <Box id="contact" sx={{ background: 'linear-gradient(180deg, #232f3e 0%, #1a2636 100%)', color: 'white', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xxl">
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
        </Container>
      </Box>

    </Box>
  );
}

export default Home;

const styles = {
  heroBox: {
     background: 'linear-gradient(120deg, #0a2342 0%, #19747e 100%)', color: 'text.primary', py: { xs: 13, md: 12 }, px: { xs: 4, md: 2 } 
  },
  aboutBox:{ background: 'linear-gradient(180deg, #f7fafc 60%, #eaf1f6 100%)', color: 'text.primary', py: { xs: 5, md: 5 }, px: { xs: 4, md: 2 } },
  bulletPointHeader: {
    fontWeight: 'bold',
  },
  projectDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  gridContainer: {
    flexDirection: 'row',
    mt: 2,
    justifyContent: 'center',
  },
  aboutPic: {
    width: '100%',
    borderRadius: 9,
    boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
    objectFit: 'cover',
    backgroundPosition: 'center',
    maxHeight: 480,
    height: '480px',
  },
  projectDiv: {
    fontSize: '1.1rem',
  },

}

function ServiceCard(props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Grid
      className={'serviceGridItem'}
      size={{ xs: 12, sm: 6 }}
      key={props.service.category}
      sx={{ minHeight: 270 }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          minHeight: 220,
          cursor: 'pointer',
        }}
        onClick={() => setFlipped((f) => !f)}
      >
        <Box
          sx={{
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: 220,
            transform: flipped ? 'rotateY(180deg)' : 'none',
          }}
        >
          {/* Front */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                py: 0,
                borderRadius: 3,
                background: 'white',
                color: '#1a2636',
                minHeight: 270,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
                width: '100%',
              }}
            >
              {props.service.icon}
              <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>
                {props.service.category}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: '#19747e', fontSize: '0.95rem' }}>
                לחץ לפרטים
              </Typography>
            </Paper>
          </Box>
          {/* Back */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                py: 0,
                borderRadius: 3,
                background: 'white',
                color: '#1a2636',
                minHeight: 270,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
                width: '100%',
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1,    fontSize: '1.1rem'}}>
                {props.service.category}
              </Typography>
              <ul style={{ px: 1, margin: 0, listStyle: 'none', textAlign: 'center' }}>
                {props.service.items.map((item, index) => (
                  <li key={index} style={{ margin: '8px 0', color: '#2d3a4a' }}>
                    {item}
                  </li>
                ))}
              </ul>
              <Typography variant="body2" sx={{ mt: 2, color: '#19747e', fontSize: '0.95rem' }}>
                לחץ לחזרה
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

const IndustryCard = (props) => {
  const { industry, onClick, selected } = props;

  const handleClick = () => {
    onClick(industry);
  };

  return (
    <Grid
      size={{ xs: 6, md: 4 }}
      key={industry.label}
      onClick={handleClick}
      sx={{
        fontWeight: 600,
        fontSize: '1.1rem',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        textAlign: 'center',
        color: '#1a2636',
        borderColor: '#b0bec5',
        background: selected ? '#e0e7ef' : '#f3f6fa',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '170px',
        boxShadow: selected ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 2px 6px rgba(0, 0, 0, 0.16)',
        '&:hover': { background: '#e0e7ef', borderColor: '#19747e' }
      }}
    >
      {industry.icon && industry.icon}
      {industry.label}
    </Grid>
  );
}

function AnimatedIndustryContent({ selectedIndustry }) {
  // Use a key on the Fade to trigger both fade out and fade in
  return (
    <Fade in={!!selectedIndustry} timeout={{ enter: 800 }} key={selectedIndustry ? selectedIndustry.label : 'none'} appear unmountOnExit>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {/* Main content for the selected industry */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              height: '100%',
              minHeight: 320,
              justifyContent: 'center',
              borderRadius: 4,
              px: 1,
            }}
          >
            <Box
              sx={{
                width: '100%',
                minHeight: 280,
                maxHeight: 300,
                height: '100%',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.23)',
                backgroundImage: `url(${selectedIndustry.imgUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              {/* Placeholder for image or icon */}
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1a2636', width: '100%', textAlign: 'center' }}>
              {selectedIndustry.label}
            </Typography>
            {/* <Typography variant="body1" sx={{ color: '#1a2636', fontSize: '1.1rem', mt: 1, width: '100%', textAlign: 'center' }}> */}
              {/* Example description, replace with real content as needed */}
              {/* פרויקט בולט בתחום זה. כאן ניתן להוסיף תיאור קצר של הפרויקט, הישגים, או מידע רלוונטי נוסף.
            </Typography> */}
          </Box>
        
      </div>
    </Fade>
  );
}