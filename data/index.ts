export type Project = {
  id: number;
  title: string;
  des: string;
  img: string; // Main preview image
  compareBefore?: string; // Design / Figma / Old version
  compareAfter?: string; // Final live app screenshot
  iconLists: string[];
  link: string;
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Intercultural Network - Travelers Community",
    des: "A full-stack MERN social media platform designed to connect users across cultures through content sharing and community engagement. Built with React, Node.js, Express, MongoDB, Redux, Material-UI, and TailwindCSS. Deployed on AWS EC2 with S3 for asset storage. Includes an Admin Dashboard for user management and analytics, a secure role-based Membership Gateway for content access control, and an advanced User Analytics Dashboard.",
    img: "/social-media-app.png",
    compareBefore: "/social-media-app-comp1.png", // Figma / Design
    compareAfter: "/social-media-app-comp2.png",
    iconLists: [
      "/re.svg",
      "/nodejs.svg",
      "/expressjs2.svg",
      "/mongodb.svg",
      "/redux.svg",
      "/socket_io.svg",
      "/tail.svg",
      "/materialui.svg",
      "/aws.svg",
      "/nginx.svg",
    ],
    link: "https://i-network.onrender.com/",
  },
  {
    id: 2,
    title: "Nokia Quality Task Tracker",
    des: "A private B2B web portal for quality assurance and team performance management at Nokia. This full-stack task/violation tracking application enables supervisors to log, track, and analyze team violations, generate detailed statistics and analytics dashboards, apply financial deductions or penalties, and manage theoretical & practical evaluation workflows. Features drag-and-drop task boards, advanced data grids, interactive charts (Chart.js + Recharts), export capabilities (CSV/Excel), QR code generation, and a comprehensive role-based admin system. Built with modern React 19 ecosystem, MUI, TailwindCSS, Redux Toolkit, React Query, and a secure Node.js/Express + MongoDB backend with JWT authentication.",
    img: "/qops-tracker.png",
    compareBefore: "/qops-tracker-comp1.png", // Figma / Design
    compareAfter: "/qops-tracker-comp2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/materialui.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/expressjs2.svg",
      "/mongodb.svg",
      "/reactquery.svg",
      "/vercel.svg",
    ],
    link: "https://nokia-quality-b2b-platform-bfrq.vercel.app/auth",
  },
  {
    id: 3,
    title: "Bye Bye Etiquette - Food Truck Order Manager",
    des: "A full-stack web application for managing food truck operations, focused on creating, tracking, and fulfilling customer orders in real-time. Designed for food trucks based in Florida, USA, it features a cash-on-delivery system, interactive Google Maps integration for location tracking, live order updates via WebSockets, order history and analytics with interactive charts (Recharts & Chart.js), Excel export capabilities, and secure user authentication. Built with React 19, Redux Toolkit, TailwindCSS, Framer Motion for smooth animations, Firebase for additional services, and a robust Node.js/Express backend with MongoDB and Socket.io for real-time communication. Deployed on Render for scalable hosting.",
    img: "/food-truck-app.png",
    compareBefore: "/food-truck-app-comp1.png", // Figma / Design
    compareAfter: "/food-truck-app-comp2.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/expressjs2.svg",
      "/mongodb.svg",
      "/firebase.svg",
      "/socket_io.svg",
    ],
    link: "https://byebyeetiquette.onrender.com",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    url: "https://github.com/ammarmodeh?tab=repositories", // ← Your real GitHub
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/ammar-m-odeh-abbb36107", // ← Your real LinkedIn
  },
];
