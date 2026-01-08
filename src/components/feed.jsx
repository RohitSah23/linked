'use client';
import React from 'react';
import { Box, Typography, Avatar, Stack, Button, Divider } from '@mui/material';
import {
  Image as ImageIcon,
  Article,
  Public,
  ThumbUpOffAlt,
  ChatBubbleOutline,
  Repeat,
  SendOutlined,
  CalendarMonth,
} from '@mui/icons-material';
import { currentUser, posts } from '@/data/mockData';

const CreatePostBox = () => (
  <Box sx={{ bgcolor: '#fff', borderRadius: { xs: 0, md: '8px' }, p: 2, boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}>
    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
      <Avatar sx={{ width: 48, height: 48 }} src={currentUser.avatar} />
      <Button
        fullWidth
        variant="outlined"
        sx={{
          justifyContent: 'flex-start',
          borderRadius: '35px',
          borderColor: 'rgba(0,0,0,0.3)',
          color: 'rgba(0,0,0,0.6)',
          fontWeight: 600,
          fontSize: 14,
          px: 2,
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.04)',
            borderColor: 'rgba(0,0,0,0.6)',
          },
        }}
      >
        Start a post
      </Button>
    </Stack>
    <Stack direction="row" justifyContent="space-around">
      <Button
        startIcon={<ImageIcon sx={{ color: '#378fe9' }} />}
        sx={{ color: 'rgba(0,0,0,0.6)', fontWeight: 600, fontSize: 14, px: 2 }}
      >
        Media
      </Button>
      <Button
        startIcon={<CalendarMonth sx={{ color: '#c37d16' }} />}
        sx={{ color: 'rgba(0,0,0,0.6)', fontWeight: 600, fontSize: 14, px: 2 }}
      >
        Event
      </Button>
      <Button
        startIcon={<Article sx={{ color: '#e06847' }} />}
        sx={{ color: 'rgba(0,0,0,0.6)', fontWeight: 600, fontSize: 14, px: 2 }}
      >
        Write article
      </Button>
    </Stack>
  </Box>
);

const ReactionIcons = () => (
  <Stack direction="row" sx={{ ml: -0.5 }}>
    <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', zIndex: 3 }}>
      <Typography sx={{ fontSize: 10 }}>👍</Typography>
    </Box>
    <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#df704d', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', ml: -0.5, zIndex: 2 }}>
      <Typography sx={{ fontSize: 10 }}>❤️</Typography>
    </Box>
    <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#7fc15e', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', ml: -0.5, zIndex: 1 }}>
      <Typography sx={{ fontSize: 10 }}>👏</Typography>
    </Box>
  </Stack>
);

const FeedActionButton = ({ icon, label }) => (
  <Button
    startIcon={icon}
    sx={{
      color: 'rgba(0,0,0,0.6)',
      fontWeight: 600,
      fontSize: { xs: 12, md: 14 },
      flex: 1,
      borderRadius: 1,
      py: 1.5,
      '&:hover': { bgcolor: 'rgba(0,0,0,0.08)' },
    }}
  >
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{label}</Box>
  </Button>
);

const PostCard = ({ post }) => {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: { xs: 0, md: '8px' }, boxShadow: '0 0 0 1px rgba(0,0,0,0.08)' }}>
      <Stack direction="row" spacing={1.5} sx={{ p: 2 }}>
        <Avatar sx={{ width: 48, height: 48 }} src={post.author.avatar} />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack direction="row" alignItems="center" spacing={0.5} flexWrap="wrap">
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 14 }}>
              {post.author.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)' }}>• {post.author.connectionDegree}</Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12, display: 'block', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {post.author.headline}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12 }}>
              {post.timestamp} {post.edited && '• Edited'} •
            </Typography>
            <Public sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }} />
          </Stack>
        </Box>
        <Button
          variant="text"
          sx={{
            color: '#0a66c2',
            fontWeight: 600,
            fontSize: 16,
            alignSelf: 'flex-start',
            minWidth: 'auto',
            '&:hover': { bgcolor: 'rgba(10,102,194,0.08)' },
          }}
        >
          + Follow
        </Button>
      </Stack>

      <Box sx={{ px: 2, pb: 1 }}>
        <Typography variant="body2" sx={{ fontSize: 14, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
          {post.content}
          {post.hasMore && (
            <Typography component="span" sx={{ color: 'rgba(0,0,0,0.6)', cursor: 'pointer', ml: 0.5, '&:hover': { color: '#0a66c2', textDecoration: 'underline' } }}>
              ...more
            </Typography>
          )}
        </Typography>
      </Box>

      {post.media?.type === 'image' && (
        <Box
          component="img"
          src={post.media.url}
          alt={post.media.alt}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 500,
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
      )}

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2, py: 1 }}>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <ReactionIcons />
          <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12, cursor: 'pointer', '&:hover': { textDecoration: 'underline', color: '#0a66c2' } }}>
            {post.reactions.topReactors.join(', ')} {post.reactions.hasMoreReactors && `and ${post.reactions.count - post.reactions.topReactors.length} others`}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12, cursor: 'pointer', '&:hover': { textDecoration: 'underline', color: '#0a66c2' } }}>
            {post.comments} comments
          </Typography>
          {post.reactions.count > 100 && (
            <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)', fontSize: 12, cursor: 'pointer', '&:hover': { textDecoration: 'underline', color: '#0a66c2' } }}>
              {Math.floor(post.reactions.count / 10)} reposts
            </Typography>
          )}
        </Stack>
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-around" sx={{ py: 0.5 }}>
        <FeedActionButton icon={<ThumbUpOffAlt sx={{ fontSize: 20 }} />} label="Like" />
        <FeedActionButton icon={<ChatBubbleOutline sx={{ fontSize: 20 }} />} label="Comment" />
        <FeedActionButton icon={<Repeat sx={{ fontSize: 20 }} />} label="Repost" />
        <FeedActionButton icon={<SendOutlined sx={{ fontSize: 20 }} />} label="Send" />
      </Stack>
    </Box>
  );
};

const Feed = () => {
  return (
    <Stack spacing={1}>
      <CreatePostBox />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Stack>
  );
};

export default Feed;
