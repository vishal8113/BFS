import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const TeamCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          About BFS
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography paragraph>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://source.unsplash.com/random/800x600?office"
              alt="Office"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member}>
              <TeamCard>
                <Avatar
                  src={`https://source.unsplash.com/random/200x200?person${member}`}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" align="center">
                    Team Member {member}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    Position
                  </Typography>
                </CardContent>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 