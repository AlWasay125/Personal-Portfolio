// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  instagram,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/AlWasay125/Personal-Portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Vulnerability Assessment",
    icon: web,
  },
  {
    title: "Penetration Testing",
    icon: mobile,
  },
  {
    title: "Data Analysis & Visualization",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Leadership Experience",
    company_name: "DUET ACM SIGSAC",
    icon: "/acm-sigsac.png",
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Coordinated and managed society events, increasing student participation by 100%.",
      "Led weekly team meetings and facilitated effective communication among 20+ members.",
      "Managed the society's budget and ensured responsible financial management.",
    ],
  },
  {
    title: "Private Tutor",
    company_name: "The Tutor Academy",
    icon: "tutor-academy.png",
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Present",
    points: [
      "Provided tailored tutoring and homework assistance, addressing student weaknesses and promoting independent learning.",
      "Developed study habits and exam strategies to enhance academic performance and confidence.",
    ],
  },
  {
    title: "Freelance Website Tester",
    company_name: "UserTesting.com & Independent Contracts",
    icon: "user-test.png",
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Conducted comprehensive website testing on platforms like usertesting.com and through independent contracts, identifying bugs and providing detailed reports.",
      "Delivered actionable feedback to improve user experience and functionality for various clients.",
      "Collaborated remotely to ensure timely project completion and high-quality deliverables.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "SOC-RADIX — Supervised Observation Classifier for Real-time Analysis of Deceptive Internet",
    description:
      "Developed a scikit-learn based web application for real-time phishing URL detection, leveraging supervised machine learning techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "pink-text-gradient",
      },
    ],
    image: "/soc-radix.jpg",
    source_code_link: "https://github.com/AlWasay125/SOC-RADIX",
    live_site_link: "https://github.com/AlWasay125/SOC-RADIX",
  },
  {
    name: "Phishing Website Detection (Machine Learning)",
    description:
      "Developed an ML-based phishing detection system analyzing HTTPS usage, anchor URLs, and traffic patterns.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "GradientBoost",
        color: "green-text-gradient",
      },
      {
        name: "SupervisedLearning",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Cyber Attacks Detection System (SQL & Data Visualization)",
    description:
      "Designed a MySQL database for cyberattack analysis, optimizing SQL queries for threat insights and evaluating ML detection models",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "DataAnalysis",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/aboywithnousername?igsh=MWxveW02NDBrMmM0aA==",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/abdul-wasay-khan-a90532289/",
  },

  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/AlWasay125",
  },
] as const;
