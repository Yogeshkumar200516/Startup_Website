import React from 'react';
import { Container, Grid, Typography, Button, Box, Card, CardContent, IconButton, CardActionArea } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CreateIcon from '@mui/icons-material/Create';
import BusinessIcon from '@mui/icons-material/Business';
import ShareIcon from '@mui/icons-material/Share';
import BrushIcon from '@mui/icons-material/Brush';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/reach-us');
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <Box
        sx={{
            background: 'linear-gradient(135deg, #0a0e1a 0%, #131c36 100%)',
          color: 'white',
          textAlign: 'center',
          padding: '120px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
          Unlock Your Business Potential
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ maxWidth: '700px', lineHeight: '1.8', mb: 4 }}>
          We offer innovative solutions designed to elevate your business and help you succeed in today’s competitive digital world. Let’s build something great together!
        </Typography>
        <Box>
          <Button variant="contained" color="secondary" sx={{ mr: 2, px: 4, py: 1.5, fontSize: '16px', borderRadius: '50px' }} onClick={handleStartClick}>
            Start Your Journey
          </Button>
          <Button variant="outlined" color="inherit" sx={{ px: 4, py: 1.5, fontSize: '16px', borderRadius: '50px' }}>
            Explore More
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Our Professional Services
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" sx={{ maxWidth: '800px', margin: 'auto', lineHeight: '1.6' }}>
          From cutting-edge software to beautiful designs, we offer a full suite of services to help your business thrive in the digital landscape.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={5}>
          {/* Service 1: Custom Software Development */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'white',
                outline: '2px solid #1b5e20',
                '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transform: 'scale(1.05)', background: 'linear-gradient(135deg, #67e68b, #b2ff59)' },
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <CardActionArea>
                <CardContent>
                  <IconButton size="large" color="primary">
                    <CodeIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Custom Software Development
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    We build custom software solutions that are tailored specifically to your business's unique needs, ensuring efficiency and scalability.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Whether you need an ERP system, a customer management platform, or a completely bespoke tool, we can build it from the ground up.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Service 2: Website Development */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'white',
                outline: '2px solid #1b5e20',
                '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transform: 'scale(1.05)', background: 'linear-gradient(135deg, #67e68b, #b2ff59)' },
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <CardActionArea>
                <CardContent>
                  <IconButton size="large" color="primary">
                    <WebIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Website Development
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Our team creates modern, responsive, and user-friendly websites to give your brand a powerful online presence.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    From eCommerce platforms to personal portfolios, we ensure every website delivers a seamless experience across all devices.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Service 3: Blog Writing */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'white',
                outline: '2px solid #1b5e20',
                '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transform: 'scale(1.05)', background: 'linear-gradient(135deg, #67e68b, #b2ff59)' },
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <CardActionArea>
                <CardContent>
                  <IconButton size="large" color="primary">
                    <CreateIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Blog Writing
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Our expert writers craft compelling and engaging blog posts that resonate with your audience, boosting SEO and driving traffic.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    From industry-specific topics to general content, our writers are experienced in delivering quality blogs that align with your brand’s voice.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Service 4: Founder-led Branding */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'white',
                outline: '2px solid #1b5e20',
                '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transform: 'scale(1.05)', background: 'linear-gradient(135deg, #67e68b, #b2ff59)' },
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <CardActionArea>
                <CardContent>
                  <IconButton size="large" color="primary">
                    <BusinessIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Founder-led Branding
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    We work directly with founders to create personalized branding strategies that reflect their unique vision and leadership.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Through a hands-on approach, we ensure that your brand carries the authenticity and individuality that only a founder can provide.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Service 5: Social Media Management */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'white',
                outline: '2px solid #1b5e20',
                '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transform: 'scale(1.05)', background: 'linear-gradient(135deg, #67e68b, #b2ff59)' },
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <CardActionArea>
                <CardContent>
                  <IconButton size="large" color="primary">
                    <ShareIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Social Media Management
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Elevate your online presence with strategic social media management that amplifies your brand's voice and engages your audience.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    We manage all your social platforms, providing content calendars, social strategy, and targeted advertising to drive results.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Service 6: Graphic Design */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                backgroundColor: 'white',
                outline: '2px solid #1b5e20',
                '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)', transform: 'scale(1.05)', background: 'linear-gradient(135deg, #67e68b, #b2ff59)' },
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <CardActionArea>
                <CardContent>
                  <IconButton size="large" color="primary">
                    <BrushIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Graphic Design
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Our designers create visually stunning graphics and branding materials that help your business stand out in the crowd.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    From logos to business cards to complete rebranding efforts, we offer design services that meet all your creative needs.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
