import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Paper, Divider, TextField } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

// Import local images
import img1 from '../../assets/images/back1.jpeg';
import img2 from '../../assets/images/back2.jpeg';
import img3 from '../../assets/images/back3.jpeg';
import img4 from '../../assets/images/back4.jpeg';
import img5 from '../../assets/images/back5.jpeg';

// Sample Data
const processSteps = [
  { title: "Consultation", description: "Understanding your needs and providing tailored solutions." },
  { title: "Planning", description: "Crafting a strategic plan for your project ensuring timely delivery." },
  { title: "Execution", description: "Bringing the project to life with cutting-edge technology." },
  { title: "Delivery", description: "Delivering high-quality projects and offering ongoing support." }
];

const testimonials = [
  { name: "John Doe", feedback: "This company exceeded our expectations in every way!" },
  { name: "Jane Smith", feedback: "Their professionalism and creativity are outstanding." },
  { name: "Tom Johnson", feedback: "Delivered on time with great attention to detail." }
];

const faqs = [
  { question: "What services do you offer?", answer: "We offer web development, digital marketing, and design services." },
  { question: "How can I contact you?", answer: "You can contact us via email at contact@webcompany.com or call us at (123) 456-7890." },
  { question: "What is your pricing model?", answer: "We provide custom quotes based on project requirements. Please contact us for a detailed proposal." },
  { question: "Do you offer support after project delivery?", answer: "Yes, we offer ongoing support and maintenance for all our projects." }
];

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box>
      {/* Slider Section */}
      <Box
        sx={{
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: 'hidden'
        }}
      >
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" gutterBottom style={{color: 'white'}}>
            Welcome to Our Web Development Company
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Crafting exceptional digital experiences for businesses worldwide.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Company History Section */}
      <Box sx={{ mt: 8, p: { xs: 3, sm: 4 }, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Our History
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in 2010, our company has grown from a small startup to a leading web development firm. We have successfully delivered over 500 projects across various industries, earning a reputation for excellence and innovation.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Milestones:
          </Typography>
          <Typography variant="body2" paragraph>
             - 2024: Company founded with a vision to revolutionize software development.<br />
             - 2024: First major project kicked off.<br />
             - 2024: Building a core team of talented developers and designers.<br />
             - 2025: Gearing up for the launch of innovative products.<br />
             - 2025: Preparing for rapid growth and market expansion.
          </Typography>

        </Container>
      </Box>

      {/* Process Steps Section */}
      <Box sx={{ mt: 8, p: { xs: 3, sm: 4 }, backgroundColor: '#e0f2f1' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Our Process
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: '12px', textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ mt: 8, p: { xs: 3, sm: 4 }, backgroundColor: '#ffffff' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: '12px', textAlign: 'center', minHeight: '150px' }}>
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    "{testimonial.feedback}"
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ mt: 8, p: { xs: 3, sm: 4 }, backgroundColor: '#fff8e1' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {faq.question}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {faq.answer}
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
          ))}
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Box sx={{ mt: 8, p: { xs: 3, sm: 4 }, backgroundColor: '#ffffff' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom style={{marginBottom: '40px'}}>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 10 }}>
                <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" paragraph>
                  Have any questions or need assistance? Feel free to reach out to us through the following methods.
                </Typography>
                <Typography variant="body1" gutterBottom style={{marginTop: '50px'}}>
                  <strong>Address:</strong> 1234 Web Street, Suite 100, Web City, WC 12345
                </Typography>
                <Typography variant="body1" gutterBottom style={{marginTop: '30px'}}>
                  <strong>Email:</strong> contact@webcompany.com
                </Typography>
                <Typography variant="body1" gutterBottom style={{marginTop: '30px'}}>
                  <strong>Phone:</strong> (123) 456-7890
                </Typography>
                <Box sx={{ mt: 7 }}>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Facebook />}
                      href="https://facebook.com"
                      target="_blank"
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Twitter />}
                      href="https://twitter.com"
                      target="_blank"
                    >
                      Twitter
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LinkedIn />}
                      href="https://linkedin.com"
                      target="_blank"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Instagram />}
                      href="https://instagram.com"
                      target="_blank"
                    >
                      Instagram
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                p: 3,
                borderRadius: '12px',
                boxShadow: 3,
                backgroundColor: '#f0f0f0'
              }}>
                <Typography variant="h6" gutterBottom>
                  Send Us a Message
                </Typography>
                <TextField label="Name" variant="outlined" fullWidth required sx={{ mb: 2 }} />
                <TextField label="Email" variant="outlined" fullWidth required sx={{ mb: 2 }} />
                <TextField label="Message" variant="outlined" fullWidth multiline rows={4} required sx={{ mb: 2 }} />
                <Button variant="contained" color="primary">
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 10 }}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <Box sx={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
              {/* Embed Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.302470827443!2d-122.41941868468107!3d37.77492957975853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062a6e9b9b9%3A0x3d5a4f0ed7f9c1a6!2sSan%20Francisco%2C%20CA%2094171%2C%20USA!5e0!3m2!1sen!2sin!4v1625192903913!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
