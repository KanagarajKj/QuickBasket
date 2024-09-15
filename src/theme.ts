import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors'; // Importing grey from MUI

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    grey: {
      500: '#253d4e',
      400: '#7e7e7e',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
