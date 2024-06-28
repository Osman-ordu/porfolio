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
];

export const stacks = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    techs: ["JavaScript", "TypeScript", "Node.js"],
  },
  {
    id: "framework-libraries",
    title: "Framework and Libraries",
    techs: ["React.js", "jQuery", "Mustache", "DevExtreme", "Ant Design", "Redux", "I18n", "Formik", "Yup", "Socket.io"],
  },
  {
    id: "styles",
    title: "Styles",
    techs: ["Cascading Style Sheets ", "Bootstrap", "Sass and SCSS", "Less ", "Tailwind CSS"],
  },
  {
    id: "ides-version-control-systems ",
    title: "IDEs, Version Control Systems and Repositories",
    techs: ["Visual Studio ", "Visual Studio Code ", "Eclipse ", "Git", "Github", "Bitbucket"],
  },
  {
    id: "package-managers-debugging",
    title: "Package Managers and Debugging Tools",
    techs: ["NPM ", "Yarn ", "Google Chrome DevTools", "VS Debugger", "Eclipse Debugger"],
  },
  {
    id: "analytics-tools",
    title: "Analytics Tools, Web Service and Operating Systems",
    techs: ["Google Analytics", "Amazon Web Service", "CDN S3 Bucket", "Windows", "macOS"],
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
