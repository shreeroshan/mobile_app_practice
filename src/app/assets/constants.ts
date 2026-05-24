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
