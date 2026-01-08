// Mock data for LinkedIn Clone

export const currentUser = {
  id: 'user-1',
  name: 'Alex Thompson',
  headline: 'Senior Software Engineer at Meta | React Expert',
  location: 'New York, USA',
  company: 'Meta',
  companyLogo: 'https://logo.clearbit.com/meta.com',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
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
      name: 'Naman Rai',
      headline: 'Founding Engineer at Roger (YC S24)',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      connectionDegree: '2nd',
    },
    timestamp: '1d',
    edited: true,
    visibility: 'public',
    content: "Wait, everyone's hyped about this ₹2.5 Cr package from an IIT graduate with insane Codeforces consistency... but here's what his Github actually looks like 👇",
    hasMore: true,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/post1/800/400',
      alt: 'Post image',
    },
    reactions: {
      count: 33,
      topReactors: ['Sugam Arora'],
      hasMoreReactors: true,
    },
    comments: 5,
  },
  {
    id: 'post-2',
    author: {
      id: 'author-2',
      name: 'Priya Sharma',
      headline: 'Senior Product Manager at Microsoft',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      connectionDegree: '1st',
    },
    timestamp: '3h',
    edited: false,
    visibility: 'public',
    content: "Excited to announce that I'll be speaking at the upcoming Product Conference 2026! 🎉\n\nTopic: \"Building Products that Scale in the AI Era\"\n\nCome say hi if you're attending!",
    hasMore: false,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/post2/800/450',
      alt: 'Conference announcement',
    },
    reactions: {
      count: 156,
      topReactors: ['Rahul Gupta', 'Ankit Singh'],
      hasMoreReactors: true,
    },
    comments: 23,
  },
  {
    id: 'post-3',
    author: {
      id: 'author-3',
      name: 'Aisha Khan',
      headline: 'Tech Lead at Google | Ex-Amazon | Open Source Contributor',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      connectionDegree: '2nd',
    },
    timestamp: '5h',
    edited: false,
    visibility: 'public',
    content: "Just pushed my 1000th commit to open source projects this year! 🚀\n\nContributing to open source has been the best decision for my career. Here's why:\n\n1. You learn from world-class engineers\n2. Your code gets reviewed by experts\n3. You build a public portfolio\n4. You give back to the community\n\nWhat's stopping you from starting today?",
    hasMore: false,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/opensource/800/500',
      alt: 'Open source contributions',
    },
    reactions: {
      count: 892,
      topReactors: ['Sundar Pichai', 'Satya Nadella'],
      hasMoreReactors: true,
    },
    comments: 67,
  },
  {
    id: 'post-4',
    author: {
      id: 'author-4',
      name: 'Rajesh Verma',
      headline: 'Founder & CEO at TechStartup | Forbes 30 Under 30',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      connectionDegree: '3rd',
    },
    timestamp: '8h',
    edited: true,
    visibility: 'public',
    content: "We just closed our Series A! 🎯\n\n$15M led by Sequoia Capital with participation from Accel and Tiger Global.\n\nWhen I started this journey 3 years ago from my bedroom, I never imagined we'd be here. From 2 founders to 50+ team members across 3 countries.\n\nThank you to everyone who believed in us. This is just the beginning.",
    hasMore: true,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/funding/800/400',
      alt: 'Funding announcement',
    },
    reactions: {
      count: 2453,
      topReactors: ['Naval Ravikant', 'Kunal Shah'],
      hasMoreReactors: true,
    },
    comments: 189,
  },
  {
    id: 'post-5',
    author: {
      id: 'author-5',
      name: 'Amit Thakur',
      headline: 'Senior Software Engineer at Netflix | Distributed Systems',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      connectionDegree: '2nd',
    },
    timestamp: '12h',
    edited: false,
    visibility: 'public',
    content: "Hot take: Most \"10x engineers\" are actually just engineers who:\n\n✅ Know how to ask the right questions\n✅ Read documentation before asking\n✅ Write code that others can understand\n✅ Communicate clearly with stakeholders\n✅ Help their teammates grow\n\nIt's not about writing more code. It's about making the right impact.\n\nAgree or disagree?",
    hasMore: false,
    media: null,
    reactions: {
      count: 1567,
      topReactors: ['DHH', 'Kent C. Dodds'],
      hasMoreReactors: true,
    },
    comments: 234,
  },
  {
    id: 'post-6',
    author: {
      id: 'author-6',
      name: 'Sneha Reddy',
      headline: 'UX Designer at Figma | Design Systems Enthusiast',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      connectionDegree: '1st',
    },
    timestamp: '1d',
    edited: false,
    visibility: 'public',
    content: "Just launched my free design system on Figma Community! 🎨\n\n500+ components, 100+ icons, dark mode support, and fully responsive.\n\nBuilt this over 6 months during weekends. Hope it helps someone out there!\n\nLink in comments 👇",
    hasMore: false,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/design/800/500',
      alt: 'Design system preview',
    },
    reactions: {
      count: 734,
      topReactors: ['Pablo Stanley', 'Dann Petty'],
      hasMoreReactors: true,
    },
    comments: 89,
  },
  {
    id: 'post-7',
    author: {
      id: 'author-7',
      name: 'Meera Joshi',
      headline: 'Data Scientist at OpenAI | PhD in Machine Learning',
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      connectionDegree: '2nd',
    },
    timestamp: '2d',
    edited: true,
    visibility: 'public',
    content: "The AI landscape in 2026 is wild:\n\n🤖 GPT-5 can write, reason, and code at PhD level\n🎨 Image generation is indistinguishable from reality  \n🎬 Video generation went from 4 seconds to 10 minutes\n🗣️ Voice cloning is scarily accurate\n\nWe're living in the future. The question is: are we ready for it?\n\nWhat excites (or concerns) you most about AI progress?",
    hasMore: true,
    media: {
      type: 'image',
      url: 'https://picsum.photos/seed/ai2026/800/450',
      alt: 'AI landscape 2026',
    },
    reactions: {
      count: 3891,
      topReactors: ['Sam Altman', 'Yann LeCun'],
      hasMoreReactors: true,
    },
    comments: 456,
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
