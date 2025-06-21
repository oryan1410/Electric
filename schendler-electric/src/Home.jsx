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

const services = [
  {
    category: 'ייעוץ ותכנון',
    items: [
      'תכנון חשמל לפרויקטים יוקרתיים (וילות חכמות ואולפני הקלטות)',
      'תכנון מערכות בית חכם, אזעקה, גילוי אש ובקרת מבנים',
      'תכנון מתקנים תעשייתיים ומערכות גיבוי גנרטורים',
      'מומחיות במפעלי מזון',
      'עריכת מכרזים, הכנת תוכניות מכרז, מפרטים טכניים, אומדנים וטיוטת חוזה',
      'ניהול ופיקוח עבודות חשמל ומערכות נלוות',
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
  { label: 'וילות יוקרה ובית חכם', icon: <HomeIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSLFID2rw2YJoZdUgTqIPYA1sIMti8Pl9Xw&s' },
  { label: 'אולפן פודקאסט', icon: <BusinessIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://podspotters.com/wp-content/uploads/jet-form-builder/0f3fd53cb26beaadd824d6741af36d6e/2025/02/91-1.jpg' },
  { label: 'מפעל מאיר בייגל', icon: <DeviceHubIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSLFID2rw2YJoZdUgTqIPYA1sIMti8Pl9Xw&s' },
  { label: 'ממגורות אשדוד', icon: <FactoryIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://firebasestorage.googleapis.com/v0/b/electric-5c719.firebasestorage.app/o/projectPics%2F50_L.jpg?alt=media&token=b7f3349c-e199-403e-8dce-cf7b66e35f25' },
  { label: 'טקס הדלקת המשואות', icon: <AccountBalanceIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://firebasestorage.googleapis.com/v0/b/electric-5c719.firebasestorage.app/o/projectPics%2F6c8f1c385c7f4c5763d5941fb6b09844.jpg?alt=media&token=81c53cdf-9646-40fd-813f-76310e0074c3' },
  { label: 'מתקני חשמל תעשייתיים', icon: <DeviceHubIcon sx={{ fontSize: 28, color: 'primary.main' }} />, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1b2k3J4a5Z6c7f8gX1jY2x5n3s4y6z8m7Ww&s' },
];

function Home() {

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);


  return (
    <Box id={'electricApp'} sx={{ direction: 'rtl', fontFamily: 'Roboto, sans-serif', background: 'linear-gradient(135deg, #0a2342 0%, #19747e 100%)', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <Box id="top" sx={{ background: 'linear-gradient(120deg, #0a2342 0%, #19747e 100%)', color: 'text.primary', py: { xs: 13, md: 13 }, px: { xs: 4, md: 2 } }}>
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

              <Button variant="contained" color="primary" size="large" sx={{ maxWidth: 540, borderRadius: 2, fontWeight: 600, px: 4, mg: '0 auto', py: 1.5, fontSize: '1.1rem', boxShadow: 2, letterSpacing: 0.5, background: '#2b8bbd', '&:hover': { background: '#176087' } }}>
                Book a Consultation
              </Button>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* About Us + Services Grid Section */}
      <Box id="about" sx={{ background: 'linear-gradient(180deg, #f7fafc 60%, #eaf1f6 100%)', color: 'text.primary', py: { xs: 5, md: 5 }, px: { xs: 4, md: 2 } }}>
        <Container maxWidth="xxl">
          <Grid className={'aboutGrid'} container gap={3} spacing={6} alignItems="center">
            {/* About Us Text */}
            <Grid size={{ xs: 12 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a2636' }}>אודות</Typography>
              <Typography variant="body1" sx={{ fontSize: '1.15rem', color: '#2d3a4a' }}>
                חנוך שינדלר, מהנדס חשמל בוגר הטכניון, הבעלים של שינדלר אלקטריק בע"מ, ממשיך מסורת משפחתית בת עשרות שנים. <br />
                למעלה מ-30 שנות ניסיון בתכנון, ניהול, פיקוח, בדיקות וביצוע של מתקנים תעשייתיים, וילות יוקרה ופרויקטים מורכבים אחרים.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '1.15rem', color: '#2d3a4a' }}>
                בעל רישיון חשמלאי בודק סוג 3, משמש כעד מומחה וכבורר מטעם בתי משפט וחברות ביטוח, מספק חוות דעת הנדסיות כחוקר נזקי חשמל <br /> עקב שריפות, הצפות, נזקי מלחמה ופעולות איבה ורשלנות מקצועית.
              </Typography>
              <br />
              <Typography variant="h4" sx={{ fontWeight: 700, pt: 2 }} >
                היתרונות שלנו
              </Typography>
              <ul>
                <li>
                  <span style={styles.bulletPointHeader}>פתרון מקיף:</span>
                  <span>ייעוץ, תכנון וביצוע בפיקוח קפדני</span>
                </li>
                <li>
                  <span style={styles.bulletPointHeader}>מומחיות משפטית: </span>
                  <span>חוות דעת מוכרת בבתי משפט ובחברות ביטוח</span>
                </li>
                <li>
                  <span style={styles.bulletPointHeader}>תגובה מהירה: </span>
                  <span>יחס אישי, זמינות וגמישות לוחות זמנים</span>
                </li>
                <li>
                  <span style={styles.bulletPointHeader}>אירועים ייחודיים: </span>
                  <span>בדירות חשמל בטקס הדלקת המשואות בהר הרצל (6 שנים ברצף)</span>
                </li>
                <li>
                  <span style={styles.bulletPointHeader}>"תפירת" פרוייקטים ייחודיים לפי מידה: </span>
                  <span>גמישות, מעורבות אישית והתאמה לצרכי הלקוח</span>
                </li>
              </ul>
              <Box id="services" >
                <Typography variant="h4" sx={{ fontWeight: 700,  color: '#1a2636', pt: 3, textAlign: 'center' }}>שירותים עיקריים:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 2 }}>
                  {services.map((service) => (
                    <ServiceCard key={service.category} service={service} />
                  ))}
                </Box>
              </Box>

            </Grid>
            {/* Indutries Grid */}
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a2636' }}>פרויקטים נבחרים:</Typography>
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
      <Box id="testimonials" sx={{ py: 5, background: '#f3f6fa', color: '#1a2636' }}>
        <Container maxWidth="xxl">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>לקוחות ממליצים</Typography>
          <TestimonailCarousel />
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
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>צור קשר</Typography>
            </Grid>
            <p>מעוניינים בשירותי ייעוץ, תכנון, בדיקה או חוות דעת? נשמח לעמוד לשירותכם:</p>
            <p>סלולרי: 050-8689068</p>
            <p>מייל: <a href="mailto:hanoch2277@gmail.com" style={{ color: '#21cbf3', textDecoration: 'none' }}>hanoch2277@gmail.com</a></p>
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

}

function ServiceCard(props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Grid
      className={'serviceGridItem'}
      size={{ xs: 12, sm: 6 }}
      key={props.service.category}
      sx={{ perspective: 1200, minHeight: 300 }}
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
                py: 3,
                borderRadius: 3,
                background: 'white',
                color: '#1a2636',
                minHeight: 252,
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
                py: 3,
                borderRadius: 3,
                background: 'white',
                color: '#1a2636',
                minHeight: 252,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
                width: '100%',
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                {props.service.category}
              </Typography>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {props.service.items.map((item, index) => (
                  <li key={index} style={{ margin: '8px 0', color: '#2d3a4a', textAlign: 'right' }}>
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
        {selectedIndustry ? (
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
              px: 2,
            }}
          >
            <Box
              sx={{
                width: '100%',
                minHeight: 230,
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
            <Typography variant="body1" sx={{ color: '#1a2636', fontSize: '1.1rem', mt: 1, width: '100%', textAlign: 'center' }}>
              {/* Example description, replace with real content as needed */}
              פרויקט בולט בתחום זה. כאן ניתן להוסיף תיאור קצר של הפרויקט, הישגים, או מידע רלוונטי נוסף.
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1" sx={{ color: '#1a2636', fontSize: '1.1rem', width: '100%', textAlign: 'center' }}>
            בחרו פרויקט מהרשימה להצגת פרטים
          </Typography>
        )}
      </div>
    </Fade>
  );
}