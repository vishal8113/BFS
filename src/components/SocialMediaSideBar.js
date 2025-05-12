import React from 'react';
import { Fab, Box, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';

const SocialMediaSidebar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: 12,
        transform: 'translateY(-50%)',
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        gap: {
          xs: 1.5,
          sm: 2,
        },
      }}
    >
      {[
        { icon: <FacebookIcon />, label: 'Facebook', url: 'https://facebook.com' },
        { icon: <XIcon />, label: 'X', url: 'https://x.com/MOHITKUMAR71333?t=43fuQLvqFaCBCE9hgZU0Vw&s=08' },
        { icon: <LinkedInIcon />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohit-baliyan-8a1262193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { icon: <InstagramIcon />, label: 'Instagram', url: 'https://instagram.com' },
        { icon: <WhatsAppIcon />, label: 'WhatsApp', url: 'https://wa.me/+919368664563' },
      ].map(({ icon, label, url }, index) => (
        <Tooltip title={label} placement="right" key={index}>
          <Fab
            size="small"
            href={url}
            target="_blank"
            disableRipple
            sx={{
              backgroundColor: '#2c2c2c',
              color: '#fff',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 6,
                backgroundColor: '#444',
              },
              '&:active': {
                backgroundColor: '#2c2c2c',
              },
              '& .MuiTouchRipple-root': {
                display: 'none',
              },
            }}
          >
            {icon}
          </Fab>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialMediaSidebar;
