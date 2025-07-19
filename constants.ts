import { StaticImageData } from "next/image";

export const METADATA = {
  img: "/logo.svg",
  title: "Shreya Patil",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "#",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "About",
    ref: "about",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I build problem-solving tech",
  "I code ideas into reality",
  "I develop Web App",
];

export const EMAIL = "shreyapatil2142@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shreya-patil-9530shreya/",
  github: "https://github.com/Shreyapatil2142",
  leetcode: "https://leetcode.com/u/mTiRhq2mKZ/",
  hackerrank: "https://www.hackerrank.com/profile/shreyapatil2142",
  instagram: "https://www.instagram.com/shreyapatil9530",
  facebook: "https://www.facebook.com/shreyapatil9530",
  gmail:"https://shreyapatil2142@gmail.com"
};
export interface Certificate {
  id:number
  title:string
  image: string
}

export const certificates:Certificate[] = [
 {
  id: 1,
  title:"INTRODUCTION TO GENERATIVE AI",
  image:"/certificates/GenAI.jpg"
 },
  {
  id: 2,
  title:"Programming In Java",
  image:"/certificates/Java.jpg"
 },
  {
  id: 3,
  title:"Basics of Python",
  image:"/certificates/Infosys.jpg"
 },
  {
  id: 4,
  title:"GenAI - Art of the possible",
  image:"/certificates/AWS.jpg"
 },
  {
  id: 5,
  title:"Learning Microsoft 365 Copilot",
  image:"/certificates/Copilot.jpg"
 },
  {
  id: 6,
  title:"Digital Skills: User Experience",
  image:"/certificates/Digital-Skills.jpg"
 },
]

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: string | StaticImageData
  githubURL: string
  liveURL: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CPaaS Platform - Omronix",
    description:
      "A CPaaS (Communication Platform as a Service) solution developed with React(Vite) and Tailwind CSS. Built to streamline decentralized communication across channels. ",
    techStacks: ["ReactJS", "Vite", "TailwindCSS"],
    image: "/projects/omronix.png",
    githubURL: "https://github.com/Shreyapatil2142/Omronix.git",
    liveURL: "https://omronix-2ymj.vercel.app/",
  },
  {
    id: 2,
    title: "Deepfake Detection System",
    description:
      "The system allows users to upload an image and get real-time predictions on whether the image is Real or DeepFake which is developed using React(vite) & Flask",
    techStacks: ["ReactJS", "Flask", "TailwindCSS"],
    image: "/projects/deepfake.png",
    githubURL: "https://github.com/Kalash-B/DeepFake-Detection-System.git",
    liveURL: "https://github.com/Kalash-B/DeepFake-Detection-System.git",

  },
  {
    id: 3,
    title: "EduWeb",
    description: "Eduweb is a full-featured educational platform designed to help students prepare for competitive exams.",
    techStacks: ["HTML", "CSS", "JavaScript"],
    image: "/projects/eduweb.png",
    githubURL: "https://github.com/Shreyapatil2142/Final-Project.git",
    liveURL: "https://final-project-lovat-zeta.vercel.app/",

  },
  {
    id: 4,
    title: "Movie App",
    description:
      "Movie App is a responsive, user-friendly web application that allows users to discover trending, top-rated movies.",
    techStacks: ["JavaScript", "OMBD", "TMDb"],
    image: "/projects/movie.png",
    githubURL: "https://github.com/Shreyapatil2142/Movie-App.git",
    liveURL: "https://movie-app-alpha-sooty.vercel.app/",

  }
]

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "vite",
    "python",
    "java",
    "cpp",
    "jira",
  ],
  librariesAndFrameworks: ["gsap", "tailwind", "react", "nextjs", "sass", "typescript"],
  databases: ["nodejs", "mysql", "mongodb",],
  CloudAndML: ["git", "firebase", "gcloud", "jupyter", "aws", "colab",],
  UserInterface: ["figma", "photoshop", "svg",]
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [

  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Engineer Intern – Omronix HMKS",
    size: ItemSize.SMALL,
    subtitle:
      "Working as a Software Engineer Intern at Omronix - HMKS, contributing to development and enhancement of software solutions with a focus on innovation and scalability.",
    slideImage: "/timeline/web-8.png",
    image: "timeline/Omronix.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Content Team – ROBORASHTRA 2K25",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to content creation at ROBORASHTRA 2K25, including scripting and trending reel production.",
    image: "/timeline/RoboRashtra.svg",
    slideImage: "/timeline/web-10.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2nd Runner-Up – PBL Poster Competition, PCCOER",
    size: ItemSize.SMALL,
    subtitle:
      "🎯Showcased project through detailed poster presentation, demonstrating solution strategy and innovation.",
    slideImage: "/timeline/web-11.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Android Developer – AICTE Virtual Internship",
    size: ItemSize.SMALL,
    subtitle:
      "Completed virtual internship (Oct–Dec 2024) through Eduskills & Google Developers. Gained hands-on experience building impactful Android apps.",
    slideImage: "/timeline/web-13.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2nd Place – GFG-XPCCOER Coding Contest",
    size: ItemSize.SMALL,
    subtitle:
      "Secured 2nd place in a competitive coding contest organized by GFG-XPCCOER, highlighting problem-solving skills and passion for development.",
    image: "/timeline/GFG.svg",
    slideImage: "/timeline/web-9.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started B.E. in Information Technology – PCCOER 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Began Bachelor's degree journey in IT at Pimpri Chinchwad College of Engineering and Research, aiming to explore core areas in tech and innovation.",
    slideImage: "/timeline/web-9.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Internship at IISER, Pune",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to IoT projects , collaborated with research teams on building interactive tools and hands on activities.",
    image: "timeline/IISER.svg",
    slideImage: "/timeline/web-15.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Seminar On AstroTinker Bot",
    size: ItemSize.SMALL,
    subtitle:
      "An innovative concept combining astronomy and robotics for space-based educational exploration.",
    slideImage: "/timeline/web-16.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st Internship at SpWebconnect",
    size: ItemSize.SMALL,
    subtitle: "Worked on real-world frontend projects using HTML, CSS, JavaScript, and React; contributed to responsive UI development and component integration.",
    image: "timeline/SpWebConnect.svg",
    slideImage: "/timeline/web-17.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Diploma at GPP",
    size: ItemSize.SMALL,
    subtitle:
      "Successfully completed 3-year diploma in IT, gaining strong foundation in programming, databases, and software development lifecycle.",
    image: "/timeline/GPP.svg",
    slideImage: "/timeline/web-17.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "10th passed from C.E.S.Prerana High School",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    slideImage: "/timeline/web-19.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}
