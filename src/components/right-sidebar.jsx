'use client';
import React from 'react';
import { Box, Typography, Stack, Button, Avatar } from '@mui/material';
import { Info, KeyboardArrowDown, ChevronRight } from '@mui/icons-material';
import { news, puzzleGames } from '@/data/mockData';

const footerLinks = [
  ['About', 'Accessibility', 'Help Center'],
  ['Privacy & Terms', 'Ad Choices', 'Advertising', 'Business Services'],
  ['Get the LinkedIn app', 'More'],
];

const RightSidebar = () => {
  return (
    <Stack spacing={1} sx={{ position: 'sticky', top: 76, alignSelf: 'flex-start' }}>
      <Box sx={{ bgcolor: '#fff', borderRadius: '8px', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)', p: 1.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 16 }}>LinkedIn News</Typography>
          <Info sx={{ fontSize: 16, color: 'rgba(0,0,0,0.6)', cursor: 'pointer' }} />
        </Stack>
        <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12, mb: 1, display: 'block' }}>
          Top stories
        </Typography>

        <Stack spacing={0.5}>
          {news.map((item) => (
            <Box
              key={item.id}
              sx={{
                py: 0.5,
                cursor: 'pointer',
                '&:hover': { '& .title': { textDecoration: 'underline' } },
              }}
            >
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'rgba(0,0,0,0.9)', mt: 0.8, flexShrink: 0 }} />
                <Box>
                  <Typography className="title" variant="caption" sx={{ fontWeight: 600, fontSize: 12, lineHeight: 1.4, display: 'block' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12 }}>
                    {item.meta}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>

        <Button
          size="small"
          endIcon={<KeyboardArrowDown />}
          sx={{ color: 'rgba(0,0,0,0.6)', fontWeight: 600, fontSize: 12, mt: 1, p: 0, '&:hover': { bgcolor: 'transparent', color: '#0a66c2' } }}
        >
          Show more
        </Button>
      </Box>

      <Box sx={{ bgcolor: '#fff', borderRadius: '8px', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)', p: 1.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 16, mb: 1.5 }}>
          Today&apos;s puzzle games
        </Typography>

        <Stack spacing={1}>
          {puzzleGames.map((game) => (
            <Stack key={game.id} direction="row" alignItems="center" justifyContent="space-between" sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' }, mx: -1.5, px: 1.5, py: 0.5 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box component="img" src={game.image} sx={{ width: 40, height: 40, borderRadius: '4px' }} />
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, fontSize: 12 }}>
                    {game.name} <span style={{ fontWeight: 400, color: 'rgba(0,0,0,0.6)' }}>{game.score}</span>
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12, display: 'block' }}>
                    {game.connections}
                  </Typography>
                </Box>
              </Stack>
              <ChevronRight sx={{ fontSize: 20, color: 'rgba(0,0,0,0.6)' }} />
            </Stack>
          ))}
        </Stack>

        <Button
          size="small"
          endIcon={<KeyboardArrowDown />}
          sx={{ color: 'rgba(0,0,0,0.6)', fontWeight: 600, fontSize: 12, mt: 1, p: 0, '&:hover': { bgcolor: 'transparent', color: '#0a66c2' } }}
        >
          Show more
        </Button>
      </Box>

      <Box sx={{ px: 1, py: 1 }}>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ mb: 0.5 }}>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>About</Typography>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>Accessibility</Typography>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>Help Center</Typography>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ mb: 0.5 }}>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>Privacy & Terms ▾</Typography>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>Ad Choices</Typography>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ mb: 0.5 }}>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>Advertising</Typography>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>Business Services ▾</Typography>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ mb: 1 }}>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>Get the LinkedIn app</Typography>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', mx: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>More</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5} sx={{ mt: 1 }}>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.9)', fontWeight: 600 }}>
            Linked<Box component="span" sx={{ color: '#0a66c2', fontWeight: 700, bgcolor: '#0a66c2', color: '#fff', px: 0.3, borderRadius: '2px' }}>in</Box>
          </Typography>
          <Typography variant="caption" sx={{ fontSize: 11, color: 'rgba(0,0,0,0.6)' }}>
            LinkedIn Corporation © 2026
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RightSidebar;
