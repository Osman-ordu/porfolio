import { SiAboutdotme } from 'react-icons/si';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
// import { GrContact } from 'react-icons/gr';
import { FaMedium } from 'react-icons/fa6';
import aboutImage from '../assets/osmanordu.png';
import segmentifyImage from '../assets/segmentify_logo.png';
import bilgeadamImage from '../assets/bilgeadam_akademi_logo.jpg';
import primetechImage from '../assets/primetechtr_logo.jpg';
import coinoImage from '../assets/coinoglobal_logo.jpg';

export const menuData = [
  { key: 'about', icon: <SiAboutdotme />, title: 'about', link: '/about' },
  {
    key: 'experience',
    icon: <MdOutlineWorkOutline />,
    title: 'experience',
    link: '/experience',
  },
  {
    key: 'education',
    icon: <GoBook />,
    title: 'education',
    link: '/education',
  },
  {
    key: 'blog',
    icon: <FaMedium />,
    title: 'blog',
    link: 'https://medium.com/@orduosmann',
  },
  // {
  //   key: 'contact',
  //   icon: <GrContact />,
  //   title: 'contacts',
  //   link: '/contacts',
  // },
];

export const about = [
  {
    titleKey: 'title',
    subTitleKey: 'name',
    image: aboutImage,
    paragraphs: ['description_p1', 'description_p2', 'description_p3'],
  },
];

export const experiences = [
  {
    id: 'primetech',
    titleKey: 'experience_1_title',
    subTitleKey: 'title',
    history: 'experience_1_title_sub',
    state: 'experience_bussines_state_full',
    image: primetechImage,
    paragraphs: [
      'experience_1_description_1',
      'experience_1_description_2',
      'experience_1_description_3',
      'experience_1_description_4',
      'experience_1_description_5',
      'experience_1_description_6',
      'experience_1_description_7',
    ],
  },
  {
    id: 'coino',
    titleKey: 'experience_0_title',
    subTitleKey: 'title',
    history: 'experience_0_title_sub',
    state: 'experience_bussines_state_full',
    image: coinoImage,
    paragraphs: ['experience_0_description_1', 'experience_0_description_2', 'experience_0_description_3', 'experience_0_description_4', 'experience_0_description_5', 'experience_0_description_6'],
  },
  {
    id: 'segmentify',
    titleKey: 'experience_2_title',
    subTitleKey: 'title',
    history: 'experience_2_title_sub',
    state: 'experience_bussines_state_full',
    image: segmentifyImage,
    paragraphs: ['experience_2_description_1', 'experience_2_description_2', 'experience_2_description_3', 'experience_2_description_4', 'experience_2_description_5'],
  },
  {
    id: 'bilge-adam',
    titleKey: 'experience_3_title',
    subTitleKey: 'title',
    history: 'experience_3_title_sub',
    state: 'experience_bussines_state_half',
    image: bilgeadamImage,
    paragraphs: ['experience_3_description_1', 'experience_3_description_2', 'experience_3_description_3', 'experience_3_description_4', 'experience_3_description_5'],
  },
];

export const stacks = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    techs: ['JavaScript', 'TypeScript', 'Node.js'],
  },
  {
    id: 'framework-libraries',
    title: 'Framework and Libraries',
    techs: ['React.js', 'jQuery', 'Mustache', 'DevExtreme', 'Ant Design', 'Redux', 'I18n', 'Formik', 'Yup', 'Socket.io'],
  },
  {
    id: 'styles',
    title: 'Styles',
    techs: ['Cascading Style Sheets ', 'Bootstrap', 'Sass and SCSS', 'Less ', 'Tailwind CSS'],
  },
  {
    id: 'ides-version-control-systems ',
    title: 'IDEs, Version Control Systems and Repositories',
    techs: ['Visual Studio ', 'Visual Studio Code ', 'Eclipse ', 'Git', 'Github', 'Bitbucket'],
  },
  {
    id: 'package-managers-debugging',
    title: 'Package Managers and Debugging Tools',
    techs: ['NPM ', 'Yarn ', 'Google Chrome DevTools', 'VS Debugger', 'Eclipse Debugger'],
  },
  {
    id: 'analytics-tools',
    title: 'Analytics Tools, Web Service and Operating Systems',
    techs: ['Google Analytics', 'Amazon Web Service', 'CDN S3 Bucket', 'Windows', 'macOS'],
  },
];

export const educations = [
  {
    titleKey: 'university_2_title',
    sectionKey: 'university_2_section',
    historyKey: 'university_2_history',
  },
  {
    titleKey: 'university_1_title',
    sectionKey: 'university_section_1',
    historyKey: 'university_history_1',
  },
  {
    titleKey: 'university_3_title',
    sectionKey: 'university_3_section',
    historyKey: 'university_3_history',
  },
];
