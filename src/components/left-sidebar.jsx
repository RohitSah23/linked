'use client';
import React from 'react';
import { Box, Typography, Avatar, Divider, Stack, Badge } from '@mui/material';
import { Bookmark, Group, CalendarMonth, Tag, Add } from '@mui/icons-material';
import { currentUser, sidebarLinks } from '@/data/mockData';

const LeftSidebar = () => {
  return (
    <Stack spacing={1} sx={{ position: 'sticky', top: 76, alignSelf: 'flex-start' }}>
      <Box sx={{ bgcolor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}>
        <Box
          sx={{
            height: 56,
            background: 'linear-gradient(180deg, #a0b4b7 0%, #c5d4d6 100%)',
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: -4 }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  bgcolor: '#0a66c2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff',
                }}
              >
                <Add sx={{ fontSize: 14, color: '#fff' }} />
              </Box>
            }
          >
            <Avatar
              sx={{
                width: 72,
                height: 72,
                border: '2px solid #fff',
              }}
              src={currentUser.avatar}
            />
          </Badge>
        </Box>

        <Stack alignItems="center" sx={{ px: 2, pt: 1, pb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 16, textAlign: 'center' }}>
            {currentUser.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: 12,
              color: 'rgba(0,0,0,0.6)',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {currentUser.headline}
          </Typography>
          <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', mt: 0.5 }}>
            {currentUser.location}
          </Typography>
          <Box
            sx={{
              mt: 1,
              bgcolor: 'rgba(0,0,0,0.08)',
              borderRadius: '12px',
              px: 1,
              py: 0.25,
            }}
          >
            <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.9)', fontWeight: 600 }}>
              {currentUser.company}
            </Typography>
          </Box>
        </Stack>

        <Divider />

        <Box sx={{ py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}>
          <Stack direction="row" justifyContent="space-between" sx={{ px: 2 }}>
            <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', fontWeight: 600 }}>
              Profile viewers
            </Typography>
            <Typography variant="caption" sx={{ fontSize: 12, color: '#0a66c2', fontWeight: 600 }}>
              {currentUser.profileViewers}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ px: 2, mt: 0.5 }}>
            <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', fontWeight: 600 }}>
              Post impressions
            </Typography>
            <Typography variant="caption" sx={{ fontSize: 12, color: '#0a66c2', fontWeight: 600 }}>
              {currentUser.postImpressions}
            </Typography>
          </Stack>
        </Box>

        <Divider />

        <Box sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}>
          <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}>
            Grow your career and get ahead
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Box sx={{ width: 16, height: 16, bgcolor: '#f8c77e', borderRadius: '4px' }} />
            <Typography variant="caption" sx={{ fontSize: 12, fontWeight: 600 }}>
              Reactivate Premium: 50% Off
            </Typography>
          </Stack>
        </Box>

        <Divider />

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}
        >
          <Bookmark sx={{ fontSize: 16, color: 'rgba(0,0,0,0.6)' }} />
          <Typography variant="caption" sx={{ fontSize: 12, fontWeight: 600 }}>
            Saved Items
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ bgcolor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}>
        <Stack sx={{ p: 1.5 }} spacing={0.5}>
          {sidebarLinks.map((link) => {
            const IconComponent = link.icon === 'Group' ? Group : link.icon === 'Tag' ? Tag : CalendarMonth;
            return (
              <Stack
                key={link.id}
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ py: 0.5, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
              >
                <IconComponent sx={{ fontSize: 16, color: 'rgba(0,0,0,0.6)' }} />
                <Typography variant="caption" sx={{ fontSize: 12, color: '#0a66c2', fontWeight: 600 }}>
                  {link.label}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default LeftSidebar;
