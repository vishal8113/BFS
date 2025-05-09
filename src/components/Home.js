import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Paper,
  Divider,
  Avatar,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import SocialMediaSidebar from "./SocialMediaSideBar"
import MenuIcon from '@mui/icons-material/Menu';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)',
  color: 'white',
  padding: theme.spacing(12, 0),
  marginBottom: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
  },
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
  },
}));


const TeamCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const ContactFormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flex: 1,
}));

const ContactFormStyled = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  padding: theme.spacing(4),
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(44,62,80,0.10)',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    padding: theme.spacing(2),
  },
}));

const ContactInfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
  color: 'white',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(2),
    fontSize: '1.5rem',
    color: theme.palette.secondary.main,
  },
}));

const services = [
  {
    title: 'BPO',
    description: 'Our BPO (Business Process Outsourcing) services help companies streamline operations, reduce costs, and focus on core business activities. We deliver high-quality, scalable solutions tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Financial Services',
    description: 'We offer a comprehensive suite of financial services including insurance, mutual funds, loans, and credit solutions to help you achieve your financial goals with confidence.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const teamMembers = [
  {
    name: 'Mohit Baliyan',
    position: 'Director 1',
    image: '/website_rw.jpg',
  },
];

const ContactSection = styled(Section)(({ theme }) => ({
  background: 'linear-gradient(120deg, #e9eef6 0%, #f8f9fa 100%)',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
}));

const Footer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(120deg, #2C3E50 0%, #34495E 100%)',
  color: '#fff',
  padding: theme.spacing(8, 0, 2, 0),
  marginTop: theme.spacing(8),
  borderTop: '1px solid #e0e0e0',
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  letterSpacing: 1,
  fontSize: '1.1rem',
  color: '#fff',
}));

const FooterLink = styled('a')(({ theme }) => ({
  display: 'block',
  color: 'rgba(255,255,255,0.85)',
  textDecoration: 'none',
  marginBottom: theme.spacing(1),
  fontWeight: 400,
  '&:hover': {
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
}));

const NewsletterInput = styled('input')(({ theme }) => ({
  border: 'none',
  outline: 'none',
  padding: '12px 16px',
  borderRadius: '24px 0 0 24px',
  fontSize: '1rem',
  width: '70%',
  background: '#fff',
  marginRight: '-4px',
}));

const NewsletterButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: '#fff',
  borderRadius: '0 24px 24px 0',
  padding: '12px',
  '&:hover': {
    background: theme.palette.secondary.dark,
  },
}));

const ConsultationForm = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  padding: theme.spacing(3),
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(44,62,80,0.10)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '100%',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const [openConsult, setOpenConsult] = React.useState(false);

  const handleOpenConsult = () => setOpenConsult(true);
  const handleCloseConsult = () => setOpenConsult(false);

  return (
    <>
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Baliyan Fintech Services Private Limited
              </Typography>

              <Typography variant="h5" paragraph sx={{ opacity: 0.9 }}>
                We provide innovative solutions for your business needs. Our team of experts is dedicated to helping you achieve your goals.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
                onClick={handleOpenConsult}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hero"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Consultation Modal */}
      <Dialog
        open={openConsult}
        onClose={handleCloseConsult}
        TransitionComponent={Transition}
        maxWidth="sm"
        fullWidth
        aria-labelledby="consultation-dialog-title"
        PaperProps={{
          sx: { borderRadius: 4, p: 0, background: '#f8f9fa' },
        }}
      >
        <DialogTitle id="consultation-dialog-title" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 0 }}>
          Book a Consultation
          <IconButton onClick={handleCloseConsult} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ConsultationForm component="form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" fullWidth required variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" fullWidth required variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" type="email" fullWidth required variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Phone" type="tel" fullWidth required variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Preferred Date" type="date" fullWidth required InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Preferred Time" type="time" fullWidth required InputLabelProps={{ shrink: true }} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" multiline rows={3} fullWidth variant="outlined" />
              </Grid>
            </Grid>
          </ConsultationForm>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleCloseConsult} color="inherit" variant="outlined" sx={{ borderRadius: 2 }}>
            Cancel
          </Button>
          <Button type="submit" color="secondary" variant="contained" sx={{ borderRadius: 2 }}>
            Book Consultation
          </Button>
        </DialogActions>
      </Dialog>

      {/* Services Section */}
      <Section id="services">
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            We offer a wide range of services to help your business grow
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {service.title}
                    </Typography>
                    <Typography>
                      {service.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Clients Section */}
      <Section id="clients">
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Our Clients
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            We are proud to serve a diverse range of clients in BPO and Financial Services
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>BPO Clients</Typography>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    <li>Upstox</li>
                    <li>Exajoule</li>
                    <li>Pronetin</li>
                    <li>IndiaMart</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>Financial Services</Typography>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    <li>General Insurance</li>
                    <li>Life Insurance</li>
                    <li>Mutual Fund</li>
                    <li>Loans</li>
                    <li>Credit Cards</li>
                    <li>Loan Against Mutual Fund</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about" sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                About Us
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                We are a team of passionate professionals dedicated to delivering excellence
              </Typography>
              <Typography paragraph>
                At Baliyan Fintel Services, we specialize in providing top-tier BPO (Business Process Outsourcing) and comprehensive Financial Services. Our BPO solutions help businesses streamline operations, reduce costs, and focus on core activities, while our Financial Services offer tailored solutions in insurance, mutual funds, loans, and credit management to help you achieve your financial goals with confidence.
              </Typography>
              <Typography paragraph>
                With years of experience and a commitment to innovation, we ensure that every client receives personalized attention and solutions that drive growth and success. Our team of experts is here to support you every step of the way.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="About"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Our Team
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Meet the people behind our success
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <TeamCard>
                  <Avatar
                    src={member.image}
                    sx={{ width: 150, height: 150, mb: 2 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" align="center">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {member.position}
                    </Typography>
                  </CardContent>
                </TeamCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Contact Section */}
      <ContactSection id="contact">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="stretch">
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <ContactFormWrapper>
                <ContactFormStyled elevation={3}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                    Send us a Message
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField required fullWidth label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField required fullWidth label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField required fullWidth label="Email" type="email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField required fullWidth label="Subject" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField required fullWidth label="Message" multiline rows={4} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" size="large" fullWidth sx={{ py: 1.5, fontSize: '1.1rem', textTransform: 'none', borderRadius: '8px' }}>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </ContactFormStyled>
              </ContactFormWrapper>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <ContactInfoCard elevation={3}>
                <Box>
                  <Typography variant="h5" gutterBottom sx={{ color: 'white', mb: 4 }}>
                    Contact Information
                  </Typography>
                  <ContactIcon>
                    <LocationOnIcon />
                    <Box>
                      <Typography variant="h6" gutterBottom>Address</Typography>
                      <Typography paragraph sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Balaji complex Sundarpuram Golbag chauraha<br />Moradabad road, Bijnor, Uttar Pradesh, 246701<br />India
                      </Typography>
                    </Box>
                  </ContactIcon>
                  <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <ContactIcon>
                    <PhoneIcon />
                    <Box>
                      <Typography variant="h6" gutterBottom>Phone</Typography>
                      <Typography paragraph sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        +91 8057883947
                      </Typography>
                    </Box>
                  </ContactIcon>
                  <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <ContactIcon>
                    <EmailIcon />
                    <Box>
                      <Typography variant="h6" gutterBottom>Email</Typography>
                      <Typography paragraph sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      baliyanshabji@gmail.com
                      </Typography>
                    </Box>
                  </ContactIcon>
                  <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <ContactIcon>
                    <AccessTimeIcon />
                    <Box>
                      <Typography variant="h6" gutterBottom>Business Hours</Typography>
                      <Typography paragraph sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed
                      </Typography>
                    </Box>
                  </ContactIcon>
                </Box>
                <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                  <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}><FacebookIcon /></IconButton>
                  <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}><TwitterIcon /></IconButton>
                  <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}><LinkedInIcon /></IconButton>
                  <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}><InstagramIcon /></IconButton>
                </Box>
              </ContactInfoCard>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>

      {/* Footer Section */}
      <Footer>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} lg={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  component="span"
                  sx={{
                    fontWeight: 900,
                    fontSize: '2.2rem',
                    color: 'secondary.main',
                    mr: 1,
                    letterSpacing: 1,
                  }}
                >
                  BFS
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Baliyan Fintech Services
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Private Limited
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                Baliyan Fintel Services is committed to assisting you with all your business and finance needs. Contact us today to get started on a customized solution. We look forward to working with you!
              </Typography>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <FooterTitle>LINKS</FooterTitle>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <FooterTitle>CONTACT US</FooterTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">+91 8057883947</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">baliyanshabji@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body2">Balaji complex Sundarpuram Golbag chauraha Moradabad road, Bijnor, Uttar Pradesh, 246701, India</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={4}>
              <FooterTitle>Subscribe to our newsletter</FooterTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NewsletterInput placeholder="Enter your email address" />
                <NewsletterButton>
                  <SendIcon />
                </NewsletterButton>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: 'secondary.main' }}><LinkedInIcon /></IconButton>
                <IconButton sx={{ color: 'secondary.main' }}><FacebookIcon /></IconButton>
                <IconButton sx={{ color: 'secondary.main' }}><InstagramIcon /></IconButton>
              </Box>
              <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.secondary' }}>
                NMLS Corporate ID#254196 California Corp. Broker's License# 01295714 Colorado Division of Real Estate, ID#100009815 Florida Office of Financial Regulation, ID#0703894
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="body2" color="text.secondary">
              ©2025 Baliyan Fintel Services. All Rights Reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FooterLink href="#">Terms Of Services</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </Box>
          </Box>
        </Container>
      </Footer>
    </Box>
    <SocialMediaSidebar />
    </>
  );
};

export default Home; 