

export const currentUser = {
  id: 'user-1',
  name: 'Alex Thompson',
  headline: 'Senior Software Engineer at Meta | React Expert',
  location: 'New York, USA',
  company: 'Meta',
  companyLogo: 'https://avatars.githubusercontent.com/u/69631?s=200&v=4',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  profileViewers: 142,
  postImpressions: 1247,
};

export const navItems = [
  { id: 'home', icon: 'Home', label: 'Home', active: true },
  { id: 'network', icon: 'People', label: 'My Network', active: false },
  { id: 'jobs', icon: 'Work', label: 'Jobs', active: false },
  { id: 'messaging', icon: 'Message', label: 'Messaging', active: false },
  { id: 'notifications', icon: 'Notifications', label: 'Notifications', active: false },
];

export const sidebarLinks = [
  { id: 'groups', icon: 'Group', label: 'Groups' },
  { id: 'newsletters', icon: 'Tag', label: 'Newsletters' },
  { id: 'events', icon: 'CalendarMonth', label: 'Events' },
];

export const posts = [
  {
    id: 'post-1',
    author: {
      id: 'author-1',
      name: 'Sarah Johnson',
      headline: 'Product Designer at Stripe',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      connectionDegree: '2nd',
    },
    timestamp: '2h',
    edited: false,
    visibility: 'public',
    content: "Just shipped a new feature! 🚀\n\nThe team worked incredibly hard on this one. It's amazing to see what we can accomplish when we're all aligned on the same goal.\n\nCheck it out and let me know what you think!",
    hasMore: false,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/stripe/800/500',
      alt: 'Product launch',
    },
    reactions: {
      count: 245,
      topReactors: ['Mike Chen', 'Emily Davis'],
      hasMoreReactors: true,
    },
    comments: 42,
  },
  {
    id: 'post-2',
    author: {
      id: 'author-2',
      name: 'David Chen',
      headline: 'Frontend Engineer at Vercel',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      connectionDegree: '1st',
    },
    timestamp: '5h',
    edited: true,
    visibility: 'public',
    content: "Next.js 15 is a game changer. The improvements to the App Router and Server Actions are incredible.\n\nAnyone else experimenting with the new features?",
    hasMore: false,
    media: null,
    reactions: {
      count: 89,
      topReactors: ['Lee Robinson'],
      hasMoreReactors: true,
    },
    comments: 15,
  },
  {
    id: 'post-3',
    author: {
      id: 'author-3',
      name: 'Emily Davis',
      headline: 'Founder @ TechFlow | YC W23',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      connectionDegree: '3rd',
    },
    timestamp: '1d',
    edited: false,
    visibility: 'public',
    content: "We're hiring! looking for a Founding Engineer to join our team in San Francisco.\n\nIf you love building complex UIs and caring about performance, DM me.",
    hasMore: true,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/hiring/800/400',
      alt: 'We are hiring',
    },
    reactions: {
      count: 567,
      topReactors: ['Alice Smith'],
      hasMoreReactors: true,
    },
    comments: 89,
  },
  {
    id: 'post-4',
    author: {
      id: 'author-4',
      name: 'Michael Wilson',
      headline: 'Engineering Manager at Uber',
      avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
      connectionDegree: '2nd',
    },
    timestamp: '2d',
    edited: false,
    visibility: 'public',
    content: "The best advice I ever received as a junior engineer:\n\n\"Don't just write code. Understand the business problem you're solving.\"\n\nContext is everything.",
    hasMore: false,
    media: null,
    reactions: {
      count: 1205,
      topReactors: ['Sarah Johnson'],
      hasMoreReactors: true,
    },
    comments: 134,
  },
];

export const news = [
  { id: 'news-1', title: 'The Big Ideas to shape 2026', meta: '11h ago • 41,434 readers' },
  { id: 'news-2', title: "India's 25 fastest-growing jobs", meta: '11h ago • 2,412 readers' },
  { id: 'news-3', title: 'Veteran founders ride AI boom', meta: '11h ago • 1,740 readers' },
  { id: 'news-4', title: "India's FY27 growth forecast", meta: '11h ago • 1,361 readers' },
  { id: 'news-5', title: 'GCCs eye engineering leaders', meta: '11h ago • 659 readers' },
];

export const puzzleGames = [
  { id: 'zip', name: 'Zip', score: '#297', image: 'https://picsum.photos/seed/zip/40/40', connections: '87 connections played' },
  { id: 'sudoku', name: 'Mini Sudoku', score: '#150', image: 'https://picsum.photos/seed/sudoku/40/40', connections: '35 connections played' },
  { id: 'tango', name: 'Tango', score: '#458', image: 'https://picsum.photos/seed/tango/40/40', connections: '30 connections played' },
  { id: 'queens', name: 'Queens', score: '#618', image: 'https://picsum.photos/seed/queens/40/40', connections: '41 connections played' },
];

export const promotedCompany = {
  id: 'company-1',
  name: 'Elbit Systems',
  tagline: 'Rohit, you might like to follow Elbit Systems',
  description: 'Join Elbit Systems and follow innovation in defense technology',
  follower: {
    name: 'Aman',
    avatar: '',
  },
  coverImage: 'linear-gradient(135deg, #1a365d 0%, #2d4a6f 100%)',
};

export const createPostActions = [
  { id: 'video', icon: 'Videocam', label: 'Video', color: '#0a66c2' },
  { id: 'photo', icon: 'Image', label: 'Photo', color: '#378fe9' },
  { id: 'article', icon: 'Article', label: 'Write article', color: '#e06847' },
];

export const postActions = [
  { id: 'like', icon: 'ThumbUpAltOutlined', label: 'Like' },
  { id: 'comment', icon: 'ChatBubbleOutlineOutlined', label: 'Comment' },
  { id: 'repost', icon: 'RepeatOutlined', label: 'Repost' },
  { id: 'send', icon: 'SendOutlined', label: 'Send' },
];
