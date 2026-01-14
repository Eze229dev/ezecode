import {
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  icoComment,
  icoDashboard,
  icoFacebook,
  icoFolders,
  icoInstagram,
  icoLinkedin,
  icoProfiles,
  icoStatistic,
  icoTailored,
  icoX,
  logoAmazon,
  logoGoogle,
  logoNetflix,
  logoSlack,
  logoZoom,
} from "../assets";

export const branding = [
  {
    id: "0",
    alt: "Logo Google",
    image: logoGoogle,
  },
  {
    id: "1",
    alt: "Logo Slack",
    image: logoSlack,
  },
  {
    id: "2",
    alt: "Logo Amazon",
    image: logoAmazon,
  },
  {
    id: "3",
    alt: "Logo Zoom",
    image: logoZoom,
  },
  {
    id: "4",
    alt: "Logo Netflix",
    image: logoNetflix,
  },
];

export const features = [
  {
    id: "0",
    alt: "Icon Dashboard",
    image: icoDashboard,
    title: "Dashboard",
    text: "A centralized view to monitor activity, key metrics, and important information at a glance.",
  },
  {
    id: "1",
    alt: "Icon Comment",
    image: icoComment,
    title: "Comment",
    text: "Enable users to interact, share feedback, and communicate directly within the interface.",
  },
  {
    id: "2",
    alt: "Icon Tailored",
    image: icoTailored,
    title: "Tailored Comments",
    text: "Personalized commenting features designed to adapt to different user roles and workflows.",
  },
  {
    id: "3",
    alt: "Icon Statistic",
    image: icoStatistic,
    title: "Statistic",
    text: "Clear and actionable insights through visual data and meaningful metrics.",
  },
  {
    id: "4",
    alt: "Icon Profiles",
    image: icoProfiles,
    title: "Profiles",
    text: "A dedicated space where users can manage personal information and preferences.",
  },
  {
    id: "5",
    alt: "Icon Folders",
    image: icoFolders,
    title: "Folders",
    text: "Organize content efficiently with a structured and intuitive folder system.",
  },
];

export const bulletPoints = [
  {
    id: "0",
    alt: "Saas Bullet Point 1",
    image: bulletPoint1,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "1. Understand the problem Before writing any code. I focus on understanding: the product goals,the target users,the real problem to solve.This step helps avoid unnecessary features and ensures the solution is aligned with both user needs and business objectives.",
  },
  {
    id: "1",
    alt: "Saas Bullet Point 2",
    image: bulletPoint2,
    width: 542,
    height: 348,
    title: "How does it work?",
    text: "2. Design & build the experience. I translate the problem into a clear and intuitive user interface by: structuring screens and layouts,designing reusable UI components,building responsive and accessible interfaces with React. The goal is to create an experience that feels natural, fast, and reliable.",
  },
  {
    id: "2",
    alt: "Saas Bullet Point 3",
    image: bulletPoint3,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "3. Optimize & deliver. Once the interface is built, I refine the product by:improving performance,polishing UI details and micro-interactions,ensuring code quality and maintainability. The result is a frontend product ready for real users and real growth.",
  },
];

export const pricing = [
  {
    id: "0",
    plan: "Starter",
    amount: 300,
    featured: false,
    features: [
      "Landing pages",
      "small apps",
      "early-stage ideas.",
      "Responsive frontend (mobile-first)",
      "Clean and modern UI",
      "Basic routing & navigation",

     "Simple dashboard layout",
    ],
  },
  {
    id: "1",
    plan: "Professional",
    amount: 700,
    featured: true,
    features: [
      "SaaS products", 
      " Production-ready apps.",
      "Statistics & data visualization",
      "Improved UX & interactions",
      "Better performance optimization",
    ],
  },
  {
    id: "2",
    plan: "Premium",
    amount: 1200,
    featured: false,
    features: [
      "Complex UI architecture",
      "Advanced user roles & permissions",
      "Custom workflows & interactions",
      "High-level performance optimization",
      "Scalable frontend structure",
      "Production-ready polish & refinement"
    ],
  },
];

export const social = [
  {
    id: "0",
    ico: icoFacebook,
    alt: "Facebook",
    link: "#/",
  },
  
  {
    id: "1",
    ico: icoInstagram,
    alt: "Instagram",
    link: "#/",
  },
  {
    id: "2",
    ico: icoLinkedin,
    alt: "Linkedin",
    link: "#/",
  },
];
