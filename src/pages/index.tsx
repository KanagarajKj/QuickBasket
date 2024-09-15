import * as React from 'react';
import Navbar from '@component/components/user/Navbar';
import { Typography, Box } from '@mui/material';

export default function NestedList() {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      setScrolled(currentScrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]); 

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Box
        sx={{
          overflowY: 'auto',
          height: 'calc(100vh - 64px)',
          marginTop: '64px',
          padding: '16px',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
          scrollbarColor: '#888 #f1f1f1',
          scrollbarWidth: 'thin',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Typography>
          {/* Ensure content is long enough to cause overflow */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ratione, iste minus alias rem animi cum reprehenderit nostrum quisquam quaerat consequatur, accusamus earum, magnam a! Exercitationem recusandae odio sed deleniti nam? Ad sint dolorem eligendi quidem unde cumque distinctio nisi sed.
        </Typography>
      </Box>
    </>
  );
}