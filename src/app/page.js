'use client';
import React from 'react';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Navbar from '@/components/navbar';
import LeftSidebar from '@/components/left-sidebar';
import Feed from '@/components/feed';
import RightSidebar from '@/components/right-sidebar';
import MobileBottomNav from '@/components/mobile-bottom-nav';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f2ee' }}>
      <Navbar />
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 1, md: 3 }, 
          px: { xs: 0, md: 2 },
          pb: { xs: 10, md: 3 },
        }}
      >
        <Grid container spacing={{ xs: 1, md: 3 }}>
          <Grid 
            item 
            sx={{ 
              display: { xs: 'none', md: 'block' },
              width: { md: '225px' },
              flexShrink: 0,
            }}
          >
            <LeftSidebar />
          </Grid>

          <Grid 
            item 
            xs={12} 
            sx={{ 
              flex: 1,
              minWidth: 0,
              maxWidth: { xs: '100%', md: 'calc(100% - 225px - 300px - 48px)' },
            }}
          >
            <Feed />
          </Grid>

          <Grid 
            item 
            sx={{ 
              display: { xs: 'none', lg: 'block' },
              width: { lg: '300px' },
              flexShrink: 0,
            }}
          >
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
      
      <MobileBottomNav />
    </Box>
  );
}
