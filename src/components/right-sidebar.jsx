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
                <Box sx={{ width: 24, height: 24, bgcolor: game.color, borderRadius: '4px' }} />
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

      <Box sx={{ px: 1 }}>
        {footerLinks.map((row, rowIdx) => (
          <Stack key={rowIdx} direction="row" flexWrap="wrap" sx={{ mb: 0.5 }}>
            {row.map((link, linkIdx) => (
              <Typography
                key={linkIdx}
                variant="caption"
                sx={{
                  fontSize: 12,
                  color: 'rgba(0,0,0,0.6)',
                  cursor: 'pointer',
                  mr: 1,
                  '&:hover': { color: '#0a66c2', textDecoration: 'underline' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Stack>
        ))}
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 1 }}>
          <Box
            component="svg"
            viewBox="0 0 24 24"
            sx={{ width: 56, height: 14, fill: 'rgba(0,0,0,0.6)' }}
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </Box>
          <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}>
            LinkedIn Corporation © 2026
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RightSidebar;
