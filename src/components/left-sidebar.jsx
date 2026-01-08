'use client';
import React from 'react';
import { Box, Typography, Avatar, Stack, Badge } from '@mui/material';
import { Bookmark, Groups, Newspaper, CalendarMonth, Add } from '@mui/icons-material';
import { currentUser } from '@/data/mockData';

const SidebarCard = ({ children, sx = {} }) => (
  <Box sx={{ bgcolor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(0,0,0,0.08)', ...sx }}>
    {children}
  </Box>
);

const SidebarLink = ({ icon: Icon, label }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1.5}
    sx={{ px: 2, py: 1, cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}
  >
    <Icon sx={{ fontSize: 18, color: 'rgba(0,0,0,0.6)' }} />
    <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 600 }}>
      {label}
    </Typography>
  </Stack>
);

const LeftSidebar = () => {
  return (
    <Stack spacing={1} sx={{ position: 'sticky', top: 76, alignSelf: 'flex-start' }}>
      {/* Profile Card */}
      <SidebarCard>
        <Box
          sx={{
            height: 56,
            position: 'relative',
            display: 'flex',
          }}
        >
          <Box sx={{ flex: 1, bgcolor: '#a0b4b7' }} />
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
            <Box sx={{ width: 28, height: 28, bgcolor: '#9aafb2', borderRight: '1px solid rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.3)' }} />
            <Box sx={{ width: 28, height: 28, bgcolor: '#b8c9cc', borderBottom: '1px solid rgba(255,255,255,0.3)' }} />
            <Box sx={{ width: 28, height: 28, bgcolor: '#b8c9cc', borderRight: '1px solid rgba(255,255,255,0.3)' }} />
            <Box sx={{ width: 28, height: 28, bgcolor: '#9aafb2' }} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, mt: -4 }}>
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
              sx={{ width: 72, height: 72, border: '2px solid #fff' }}
              src={currentUser.avatar}
            />
          </Badge>
        </Box>

        <Stack alignItems="flex-start" sx={{ px: 2, pt: 1.5, pb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 16 }}>
            {currentUser.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: 12,
              color: 'rgba(0,0,0,0.6)',
              lineHeight: 1.4,
              mt: 0.5,
            }}
          >
            {currentUser.headline}
          </Typography>
          <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', mt: 0.5 }}>
            {currentUser.location}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mt: 1.5 }}>
            <Avatar
              src={currentUser.companyLogo}
              sx={{ width: 18, height: 18, bgcolor: '#000' }}
            />
            <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.9)', fontWeight: 600 }}>
              {currentUser.company}
            </Typography>
          </Stack>
        </Stack>
      </SidebarCard>

      {/* Stats Card */}
      <SidebarCard>
        <Box sx={{ py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}>
          <Stack direction="row" justifyContent="space-between" sx={{ px: 2 }}>
            <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}>
              Profile viewers
            </Typography>
            <Typography variant="caption" sx={{ fontSize: 12, color: '#0a66c2', fontWeight: 600 }}>
              {currentUser.profileViewers}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ px: 2, mt: 0.5 }}>
            <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}>
              Post impressions
            </Typography>
            <Typography variant="caption" sx={{ fontSize: 12, color: '#0a66c2', fontWeight: 600 }}>
              {currentUser.postImpressions}
            </Typography>
          </Stack>
        </Box>
      </SidebarCard>

      {/* Premium CTA Card */}
      <SidebarCard>
        <Box sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}>
          <Typography variant="caption" sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}>
            Grow your career and get ahead
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Box sx={{ width: 16, height: 16, bgcolor: '#f8c77e', borderRadius: '4px' }} />
            <Typography variant="caption" sx={{ fontSize: 12, fontWeight: 600, color: '#915907' }}>
              Reactivate Premium: 50% Off
            </Typography>
          </Stack>
        </Box>
      </SidebarCard>

      {/* Quick Links Card */}
      <SidebarCard>
        <Stack sx={{ py: 1 }}>
          <SidebarLink icon={Bookmark} label="Saved items" />
          <SidebarLink icon={Groups} label="Groups" />
          <SidebarLink icon={Newspaper} label="Newsletters" />
          <SidebarLink icon={CalendarMonth} label="Events" />
        </Stack>
      </SidebarCard>
    </Stack>
  );
};

export default LeftSidebar;
