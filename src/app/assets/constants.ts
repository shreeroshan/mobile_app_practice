export const tabs = [
  {
    name: "index",
    title: "Home",
    activeIcon: "home",
    inactiveIcon: "home-outline",
  },
  {
    name: "more",
    title: "Explore",
    activeIcon: "grid",
    inactiveIcon: "grid-outline",
  },
  {
    name: "notifications",
    title: "Alerts",
    activeIcon: "notifications",
    inactiveIcon: "notifications-outline",
  },
] as const;


export const HOME_USER={
    name:"Ram Shrestha"
}

export const HOME_BALANCE={
    amount:2000,
    nextRenewalDate:"2026-03-18T09:00:00.000Z"
}

export const Upcoming_Subscriptions = [
  {
    name: "spotify",
    descriptions: "Music listening app",
    price: 2.001,
    icon: "spotify",
  },
  {
    name: "youtube",
    descriptions: "Video watching app",
    price: 5.001,
    icon: "youtube",
  },
  {
    name: "google",
    descriptions: "Web searching app",
    price: 10.001,
    icon: "google",
  },
] as const;

export const All_subscriptions = [
  {
    name: "spotify",
    descriptions: "Music listening app with offline downloads",
    price: 2.001,
    icon: "spotify",
  },
  {
    name: "youtube",
    descriptions: "Video streaming with premium content",
    price: 5.001,
    icon: "youtube",
  },
  {
    name: "google",
    descriptions: "Search and productivity bundle",
    price: 10.001,
    icon: "google",
  },
  {
    name: "netflix",
    descriptions: "Streaming movies and TV shows",
    price: 8.99,
    icon: "netflix",
  },
  {
    name: "spotify premium",
    descriptions: "Ad-free music with high quality audio",
    price: 4.99,
    icon: "spotify",
  },
] as const;

export const EXPLORE_APPS = [
  {
    name: "spotify",
    description: "Music streaming service",
    category: "Music",
    price: 2.001,
    icon: "spotify",
    rating: 4.8,
  },
  {
    name: "youtube",
    description: "Video streaming platform",
    category: "Entertainment",
    price: 5.001,
    icon: "youtube",
    rating: 4.6,
  },
  {
    name: "netflix",
    description: "Movies and TV shows",
    category: "Entertainment",
    price: 8.99,
    icon: "netflix",
    rating: 4.7,
  },
  {
    name: "google",
    description: "Search and productivity",
    category: "Productivity",
    price: 10.001,
    icon: "google",
    rating: 4.5,
  },
  {
    name: "discord",
    description: "Community and chat",
    category: "Social",
    price: 3.99,
    icon: "discord",
    rating: 4.9,
  },
  {
    name: "dropbox",
    description: "Cloud storage",
    category: "Storage",
    price: 4.99,
    icon: "dropbox",
    rating: 4.4,
  },
] as const;

export const ALERTS = [
  {
    id: 1,
    title: "Spotify Renews Tomorrow",
    description: "Your Spotify subscription will renew on May 25, 2026",
    type: "renewal" as const,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    title: "New Offer: YouTube Premium",
    description: "Get 20% off YouTube Premium for the next 3 months",
    type: "offer" as const,
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    title: "Netflix Price Update",
    description: "Your Netflix plan pricing has changed",
    type: "update" as const,
    timestamp: "1 day ago",
  },
  {
    id: 4,
    title: "Google One Refund Issued",
    description: "A refund of $2.50 has been processed to your account",
    type: "refund" as const,
    timestamp: "2 days ago",
  },
  {
    id: 5,
    title: "Payment Failed",
    description: "Payment for Spotify failed. Please update your payment method",
    type: "error" as const,
    timestamp: "3 days ago",
  },
];
