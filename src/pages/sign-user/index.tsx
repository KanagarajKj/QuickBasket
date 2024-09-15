import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Avatar
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Example icon

const UserAuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup form
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Center form vertically
        // backgroundColor: '#f0f0f0',
        padding: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50ch',
          backgroundColor: 'white',
          gap: 2,
          // boxShadow: 3, // Box shadow
          p: 4, // Padding inside the form
          borderRadius: 2, // Rounded corners
          position: 'relative',
        }}
        noValidate
        autoComplete="off"
      >
        {/* Icon in the top-left corner */}
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            position: 'absolute',
            top: -30,
            left: -30,
            width: 56,
            height: 56,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>

        {/* Form Title */}
        <Typography variant="h4" gutterBottom>
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>

        {/* Conditionally render Login or Signup Form */}
        {isLogin ? (
          <>
            <TextField
              id="username"
              label="Username or Email"
              variant="outlined"
              type="text"
              required
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              required
              fullWidth
            />

            <FormControlLabel
              control={<Checkbox name="rememberMe" color="primary" />}
              label="Remember me"
              sx={{ alignSelf: 'flex-start' }}
            />

            <Button
              variant="contained"
              color="primary"
              // sx={{ mt: 2, width: '60ch', mx: 0 }}
              type="submit"
              fullWidth
            >
              Sign In
            </Button>

            <Typography
              variant="body2"
              sx={{ mt: 2, cursor: 'pointer' }}
              onClick={toggleForm}
            >
              Don't have an account?{' '}
              <span style={{ textDecoration: 'underline' }}>Sign Up</span>
            </Typography>
          </>
        ) : (
          <>
            <TextField
              id="name"
              label="Full Name"
              variant="outlined"
              type="text"
              required
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              required
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              required
              fullWidth
            />
            <TextField
              id="confirm-password"
              label="Confirm Password"
              variant="outlined"
              type="password"
              required
              fullWidth
            />

            <Button
              variant="contained"
              color="secondary"
              // sx={{ mt: 2, width: '60ch', mx: 0 }}
              type="submit"
              fullWidth
            >
              Sign Up
            </Button>

            <Typography
              variant="body2"
              sx={{ mt: 2, cursor: 'pointer' }}
              onClick={toggleForm}
            >
              Already have an account?{' '}
              <span style={{ textDecoration: 'underline' }}>Sign In</span>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default UserAuthPage;
