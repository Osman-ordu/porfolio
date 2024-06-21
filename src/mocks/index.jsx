import { SiAboutdotme, SiMedium } from "react-icons/si";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaRegFolder } from "react-icons/fa";
import { RiStackshareLine } from "react-icons/ri";
import aboutImage from "../assets/osmanordu.png";

export const menuData = [
  { key: "about", icon: <SiAboutdotme />, title: "about", link: "/about" },
  {
    key: "experience",
    icon: <MdOutlineWorkOutline />,
    title: "experience",
    link: "/experience",
  },
  {
    key: "education",
    icon: <GoBook />,
    title: "education",
    link: "/education",
  },
  // {
  //   key: 'certificates',
  //   icon: <LiaCertificateSolid />,
  //   title: 'certificates',
  //   link: '/certificates',
  // },
  // {
  //   key: 'projects',
  //   icon: <FaRegFolder />,
  //   title: 'projects',
  //   link: '/projects',
  // },
  {
    key: "stack",
    icon: <RiStackshareLine />,
    title: "stack",
    link: "/stack",
  },
  { key: "articles", icon: <SiMedium />, title: "blog", link: "/articles" },
];

export const about = [
  {
    titleKey: "title",
    subTitleKey: "name",
    image: aboutImage,
    paragraphs: ["description_p1", "description_p2"],
  },
];

export const experiences = [
  {
    id: "primetech",
    titleKey: "experience_1_title",
    subTitleKey: "title",
    history: "experience_1_title_sub",
    paragraphs: ["experience_1_description_1", "experience_1_description_2", "experience_1_description_3", "experience_1_description_4", "experience_1_description_5"],
  },
  {
    id: "segmentify",
    titleKey: "experience_2_title",
    subTitleKey: "title",
    history: "experience_2_title_sub",
    paragraphs: ["experience_2_description_1", "experience_2_description_2", "experience_2_description_3"],
  },
  {
    id: "bilge-adam",
    titleKey: "experience_3_title",
    subTitleKey: "title",
    history: "experience_3_title_sub",
    paragraphs: ["experience_3_description_1", "experience_3_description_2", "experience_3_description_3"],
  },
  {
    id: "inditex",
    titleKey: "experience_4_title",
    subTitleKey: "Visual Merchandiser",
    history: "experience_4_title_sub",
    paragraphs: ["experience_4_description_1", "experience_4_description_2", "experience_4_description_3"],
  },
];

export const stacks = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    techs: [
      "JavaScript (Core for frontend functionality)",
      "TypeScript (Superset of JS for stronger typing and maintainability)",
      "Node.js (JavaScript runtime environment for server-side scripting)",
    ],
  },
  {
    id: "libraries",
    title: "Libraries",
    techs: [
      "jQuery (Popular library for DOM manipulation and event handling)",
      "Mustache (Templating library for generating HTML from data)",
      "DevExtreme (Comprehensive UI component library)",
      "Ant Design (React UI component library with a rich set of components)",
      "Redux (State management library for predictable state updates)",
      "I18n (Internationalization libraries for language support)",
      "Formik (Form handling library for validation and form management)",
      "Yup (Schema validation library for data integrity)",
      "Socket.io (Real-time communication library for bidirectional data flow)",
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    techs: ["React (Popular JS library for building reusable UI components)", "Angular (Comprehensive framework for building large-scale web applications)"],
  },
  {
    id: "styles",
    title: "Styles",
    techs: [
      "Pure CSS (Methodology for writing maintainable CSS)",
      "Bootstrap (Prebuilt CSS framework for responsive layouts)",
      "Sass & SCSS (CSS preprocessors for better organization and features)",
      "Less (Another CSS preprocessor with similar functionalities)",
      "Tailwind CSS (Utility-first CSS framework for rapid styling)",
    ],
  },
  {
    id: "ides",
    title: "IDEs (Integrated Development Environments)",
    techs: ["Visual Studio (Popular IDE for various programming languages)", "Visual Studio Code (Lightweight and customizable code editor)", "Eclipse (Open-source IDE for Java and other languages)"],
  },
  {
    id: "version-control-systems",
    title: "Version Control Systems",
    techs: ["Git (Most popular version control system for tracking code changes)"],
  },
  {
    id: "version-control-repositories",
    title: "Version Control Repositories",
    techs: ["GitHub (Popular cloud-based Git hosting service)", "Bitbucket (Another Git hosting service with team collaboration features)"],
  },
  {
    id: "debugging-tools",
    title: "Debugging Tools",
    techs: [
      "Google Chrome DevTools (Built-in browser developer tools for inspecting and debugging)",
      "VS Debugger (Debugging functionality within Visual Studio)",
      "Eclipse Debugger (Debugging functionality within Eclipse)",
    ],
  },
  {
    id: "package-managers",
    title: "Package Managers",
    techs: ["NPM (Node Package Manager for installing JavaScript packages)", "Yarn (Alternative package manager with advanced features)"],
  },
  {
    id: "analytics-tools",
    title: "Analytics Tools",
    techs: ["Google Analytics (Popular web analytics tool for tracking user behavior)"],
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    techs: ["Windows, macOS (Popular choices for frontend development)"],
  },
];

export const educations = [
  {
    titleKey: "university_2_title",
    sectionKey: "university_2_section",
    historyKey: "university_2_history",
  },
  {
    titleKey: "university_1_title",
    sectionKey: "university_section_1",
    historyKey: "university_history_1",
  },
  {
    titleKey: "university_3_title",
    sectionKey: "university_3_section",
    historyKey: "university_3_history",
  },
];
