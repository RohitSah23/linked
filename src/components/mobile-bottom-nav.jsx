'use client';
import React from 'react';
import { Box, Stack, Typography, Badge } from '@mui/material';
import {
  Home as HomeIcon,
  People as PeopleIcon,
  AddBox as AddIcon,
  Notifications as NotificationsIcon,
  Work as JobsIcon,
} from '@mui/icons-material';

const navItems = [
  { id: 'home', icon: HomeIcon, label: 'Home', active: true },
  { id: 'network', icon: PeopleIcon, label: 'My Network', active: false },
  { id: 'post', icon: AddIcon, label: 'Post', active: false },
  { id: 'notifications', icon: NotificationsIcon, label: 'Notifications', active: false },
  { id: 'jobs', icon: JobsIcon, label: 'Jobs', active: false },
];

const MobileBottomNav = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        bgcolor: '#fff',
        borderTop: '1px solid rgba(0,0,0,0.15)',
        borderRadius: 0,
      }}
    >
      <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ width: '100%', py: 1 }}>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Stack
              key={item.id}
              alignItems="center"
              spacing={0.25}
              sx={{
                cursor: 'pointer',
                flex: 1,
                color: item.active ? '#000' : 'rgba(0,0,0,0.6)',
                '&:hover': { color: '#000' },
              }}
            >
              {item.badge ? (
                <Badge
                  badgeContent={item.badge}
                  color="error"
                  sx={{
                    '& .MuiBadge-badge': {
                      fontSize: 10,
                      minWidth: 18,
                      height: 18,
                      bgcolor: '#cc1016',
                    },
                  }}
                >
                  <IconComponent sx={{ fontSize: 24 }} />
                </Badge>
              ) : (
                <IconComponent sx={{ fontSize: 24 }} />
              )}
              <Typography
                variant="caption"
                sx={{
                  fontSize: 10,
                  fontWeight: item.active ? 600 : 400,
                  lineHeight: 1.2,
                }}
              >
                {item.label}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MobileBottomNav;
