'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar,
  Container,
  Stack,
  IconButton,
} from '@mui/material';
import {
  Search as SearchIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Apps as AppsIcon,
  ArrowDropDown,
  ChatBubble,
} from '@mui/icons-material';
import { currentUser, navItems } from '@/data/mockData';

const iconComponents = {
  Home: HomeIcon,
  People: PeopleIcon,
  Work: WorkIcon,
  Message: MessageIcon,
  Notifications: NotificationsIcon,
};

const NavItem = ({ icon, label, active, hasBadge, badgeCount }) => {
  const IconComponent = iconComponents[icon];
  
  return (
    <Stack
      alignItems="center"
      sx={{
        minWidth: 80,
        cursor: 'pointer',
        color: active ? 'text.primary' : 'rgba(0,0,0,0.6)',
        position: 'relative',
        py: 1,
        '&:hover': { color: 'text.primary' },
        '&::after': active ? {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          bgcolor: 'text.primary',
        } : {},
      }}
    >
      {hasBadge ? (
        <Badge badgeContent={badgeCount} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 10, minWidth: 16, height: 16 } }}>
          <IconComponent sx={{ fontSize: 24 }} />
        </Badge>
      ) : (
        <IconComponent sx={{ fontSize: 24 }} />
      )}
      <Typography variant="caption" sx={{ fontSize: '12px', lineHeight: 1.5, display: { xs: 'none', md: 'block' } }}>
        {label}
      </Typography>
    </Stack>
  );
};

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#ffffff',
        borderBottom: 'none',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 2 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 52, md: 52 }, justifyContent: 'space-between' }}>
          
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={1}
            sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={currentUser.avatar} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#fff',
                border: '1px solid rgba(0,0,0,0.1)',
                px: 1,
                borderRadius: '30px',
                height: 36,
                flex: 1,
              }}
            >
              <SearchIcon sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 20 }} />
              <InputBase
                placeholder="Search"
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: 14,
                  '& input::placeholder': { color: 'rgba(0,0,0,0.6)', opacity: 1 },
                }}
              />
            </Box>
            <IconButton sx={{ color: 'rgba(0,0,0,0.6)' }}>
              <ChatBubble sx={{ fontSize: 24 }} />
            </IconButton>
          </Stack>

          <Stack 
            direction="row" 
            spacing={1} 
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <Box
              component="svg"
              viewBox="0 0 24 24"
              sx={{ width: 34, height: 34, fill: '#0a66c2' }}
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#fff',
                border: '1px solid rgba(0,0,0,0.1)',
                px: 1,
                borderRadius: '30px',
                height: 34,
                width: 280,
              }}
            >
              <SearchIcon sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 20 }} />
              <InputBase
                placeholder="Search"
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: 14,
                  '& input::placeholder': { color: 'rgba(0,0,0,0.6)', opacity: 1 },
                }}
              />
            </Box>
          </Stack>

          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={0}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={item.active}
                hasBadge={!!item.badge}
                badgeCount={item.badge}
              />
            ))}

            <Box sx={{ width: '1px', height: 40, bgcolor: 'rgba(0,0,0,0.08)', mx: 1 }} />

            <Stack
              alignItems="center"
              sx={{ minWidth: 60, cursor: 'pointer', color: 'rgba(0,0,0,0.6)' }}
            >
              <Avatar sx={{ width: 24, height: 24 }} src={currentUser.avatar} />
              <Stack direction="row" alignItems="center" spacing={0}>
                <Typography variant="caption" sx={{ fontSize: 12 }}>Me</Typography>
                <ArrowDropDown sx={{ fontSize: 16 }} />
              </Stack>
            </Stack>

            <Stack
              alignItems="center"
              sx={{ minWidth: 80, cursor: 'pointer', color: 'rgba(0,0,0,0.6)', display: { xs: 'none', lg: 'flex' }, borderLeft: '1px solid rgba(0,0,0,0.08)', pl: 2 }}
            >
              <AppsIcon sx={{ fontSize: 24 }} />
              <Stack direction="row" alignItems="center" spacing={0}>
                <Typography variant="caption" sx={{ fontSize: 12 }}>For Business</Typography>
                <ArrowDropDown sx={{ fontSize: 16 }} />
              </Stack>
            </Stack>

            <Box sx={{ display: { xs: 'none', lg: 'block' }, ml: 2, textAlign: 'center', maxWidth: 90 }}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: 12,
                  color: '#915907',
                  textDecoration: 'underline',
                  lineHeight: 1.2,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Reactivate Premium
              </Typography>
              <Typography variant="caption" sx={{ fontSize: 12, color: '#915907', fontWeight: 600, display: 'block' }}>
                50% Off
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
