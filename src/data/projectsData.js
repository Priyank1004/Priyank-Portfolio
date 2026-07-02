import image from '../images/image'

export const PROJECTS = [
  {
    id: 1,
    categories: ["reactjs", "javascript"],
    accentColor: "#3B82F6",
    accentBg: "rgba(59,130,246,0.1)",
    image: image.project1,
    alt: "Healthcare EMR Dashboard",
    tags: [
      { label: "ReactJS", color: "#adc6ff", bg: "rgba(173,198,255,0.1)", border: "rgba(173,198,255,0.2)" },
      { label: "JavaScript", color: "#94A3B8", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
      { label: "HTML/CSS", color: "#94A3B8", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
    ],
    title: "Healthcare EMR Platform",
    desc: "A comprehensive mental health platform featuring secure telehealth video consultations, patient record management, and real-time scheduling.",
    cta: "View Case Study",
    ctaColor: "#adc6ff",
  },
  {
    id: 2,
    categories: ["reactjs", "javascript", "rest-api"],
    accentColor: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.1)",
    image: image.project2,
    alt: "E-Commerce Dashboard",
    tags: [
      { label: "React", color: "#8B5CF6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
      { label: "API Integration", color: "#94A3B8", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
      { label: "GitHub", color: "#94A3B8", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
    ],
    title: "Online Doctor Appointment Booking Platform",
    desc: "Prescripto is an online healthcare platform that connects patients with qualified doctors, enabling easy appointment booking and medical consultations.",
    cta: "View Live Site",
    projectLink: 'https://prescripto-react-design.vercel.app/',
    ctaColor: "#8B5CF6",
  },
  {
    id: 3,
    categories: ["reactjs", "javascript"],
    accentColor: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.1)",
    image: image.project3,
    alt: "E-Commerce Dashboard",
    tags: [
      { label: "React", color: "#8B5CF6", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)" },
      { label: "API Integration", color: "#94A3B8", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
      { label: "GitHub", color: "#94A3B8", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" },
    ],
    title: "Apex Community Manager",
    desc: "Modern property management platform simplifying resident communication, maintenance requests, visitor tracking, document storage, and community engagement effortlessly.",
    cta: "View Live Site",
    projectLink: 'https://apex-pi-orpin.vercel.app/',
    ctaColor: "#8B5CF6",
  },
  {
    id: 4,
    categories: ["wordpress"],
    accentColor: "#F59E0B",
    accentBg: "rgba(245,158,11,0.1)",
    image: image.project4,
    alt: "Alpha Engineering Works Website",
    tags: [
      {
        label: "Wordpress",
        color: "#F59E0B",
        bg: "rgba(245,158,11,0.1)",
        border: "rgba(245,158,11,0.2)"
      }
    ],
    title: "Alpha Engineering Works",
    desc: "Professional industrial engineering website showcasing advanced valve manufacturing solutions, turnkey engineering services, industrial applications, and customized flow control systems.",
    cta: "View Live Site",
    projectLink: "https://alphaenggworks.com/",
    ctaColor: "#F59E0B",
  },
  {
    id: 5,
    categories: ["wordpress"],
    accentColor: "#06B6D4",
    accentBg: "rgba(6,182,212,0.1)",
    image: image.project4,
    alt: "MyWaterRank Platform",
    tags: [
      {
        label: "Wordpress",
        color: "#06B6D4",
        bg: "rgba(6,182,212,0.1)",
        border: "rgba(6,182,212,0.2)"
      }
    ],
    title: "MyWaterRank",
    desc: "Developed an AI-powered water quality monitoring platform featuring real-time analytics, IoT sensor integration, predictive insights, and industry-specific solutions for sustainable water management.",
    cta: "View Live Site",
    projectLink: "https://mywaterrank.com/",
    ctaColor: "#06B6D4",
  }
];

export const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "ReactJS", value: "reactjs" },
  { label: "JavaScript", value: "javascript" },
  { label: "WordPress", value: "wordpress" },
  { label: "REST API", value: "rest-api" },
];
