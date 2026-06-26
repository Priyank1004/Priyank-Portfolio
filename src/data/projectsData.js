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
    categories: ["reactjs","javascript", "rest-api"],
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
];

export const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "ReactJS", value: "reactjs" },
  { label: "JavaScript", value: "javascript" },
  { label: "WordPress", value: "wordpress" },
  { label: "REST API", value: "rest-api" },
];
