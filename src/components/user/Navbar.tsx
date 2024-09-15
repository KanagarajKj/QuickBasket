import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <IconButton onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
      <List>
        {[
          { text: 'Cart', icon: <ShoppingCartIcon /> },
          { text: 'Orders', icon: <ShoppingBagIcon /> },
          { text: 'Notifications', icon: <NotificationsIcon /> },
          { text: 'Account', icon: <AccountCircleIcon /> },
        ].map((item, index) => (
          <ListItemButton
            key={item.text}
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        boxShadow: scrolled
          ? '0px 1px 3px rgba(255, 165, 0, 0.8)'
          : '0px 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="grey.500"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <IconButton edge="start" color="warning">
            <LockOutlinedIcon />
          </IconButton>
        )}

        <Typography
          color="warning"
          variant="h6"
          sx={{ flexGrow: 1, textAlign: isMobile ? 'center' : 'left' }}
        >
          Nav Bar
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && (
            <>
              {[
                { icon: <ShoppingCartIcon />, text: 'Cart', badgeContent: 4 },
                { icon: <ShoppingBagIcon />, text: 'My Orders' },
                {
                  icon: <NotificationsIcon />,
                  text: 'Notifications',
                  badgeContent: 17,
                },
                { icon: <AccountCircleIcon />, text: 'Account' },
              ].map((item, index) => (
                <IconButton
                  key={item.text}
                  size="large"
                  sx={{
                    color: 'grey.500',
                    '&:hover': {
                        color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {item.badgeContent ? (
                    <Badge badgeContent={item.badgeContent} color="secondary">
                      {item.icon}
                    </Badge>
                  ) : (
                    item.icon
                  )}
                  <Typography color="grey.400" sx={{ ml: '8px' }}>
                    {item.text}
                  </Typography>
                </IconButton>
              ))}
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
