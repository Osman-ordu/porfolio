import CSlider from '../../components/slider'
import styles from './styles.module.scss'

const Stack = () => {
  const techStackData = [
    {
      id: 'programming-languages',
      title: 'Programming Languages',
      techs: [
        'JavaScript (Core for frontend functionality)',
        'TypeScript (Superset of JS for stronger typing and maintainability)',
        'Node.js (JavaScript runtime environment for server-side scripting)',
      ],
    },
    {
      id: 'libraries',
      title: 'Libraries',
      techs: [
        'jQuery (Popular library for DOM manipulation and event handling)',
        'Mustache (Templating library for generating HTML from data)',
        'DevExtreme (Comprehensive UI component library)',
        'Ant Design (React UI component library with a rich set of components)',
        'Redux (State management library for predictable state updates)',
        'I18n (Internationalization libraries for language support)',
        'Formik (Form handling library for validation and form management)',
        'Yup (Schema validation library for data integrity)',
        'Socket.io (Real-time communication library for bidirectional data flow)',
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      techs: [
        'React (Popular JS library for building reusable UI components)',
        'Angular (Comprehensive framework for building large-scale web applications)',
      ],
    },
    {
      id: 'styles',
      title: 'Styles',
      techs: [
        'Pure CSS (Methodology for writing maintainable CSS)',
        'Bootstrap (Prebuilt CSS framework for responsive layouts)',
        'Sass & SCSS (CSS preprocessors for better organization and features)',
        'Less (Another CSS preprocessor with similar functionalities)',
        'Tailwind CSS (Utility-first CSS framework for rapid styling)',
      ],
    },
    {
      id: 'ides',
      title: 'IDEs (Integrated Development Environments)',
      techs: [
        'Visual Studio (Popular IDE for various programming languages)',
        'Visual Studio Code (Lightweight and customizable code editor)',
        'Eclipse (Open-source IDE for Java and other languages)',
      ],
    },
    {
      id: 'version-control-systems',
      title: 'Version Control Systems',
      techs: ['Git (Most popular version control system for tracking code changes)'],
    },
    {
      id: 'version-control-repositories',
      title: 'Version Control Repositories',
      techs: [
        'GitHub (Popular cloud-based Git hosting service)',
        'Bitbucket (Another Git hosting service with team collaboration features)',
      ],
    },
    {
      id: 'debugging-tools',
      title: 'Debugging Tools',
      techs: [
        'Google Chrome DevTools (Built-in browser developer tools for inspecting and debugging)',
        'VS Debugger (Debugging functionality within Visual Studio)',
        'Eclipse Debugger (Debugging functionality within Eclipse)',
      ],
    },
    {
      id: 'package-managers',
      title: 'Package Managers',
      techs: [
        'NPM (Node Package Manager for installing JavaScript packages)',
        'Yarn (Alternative package manager with advanced features)',
      ],
    },
    {
      id: 'analytics-tools',
      title: 'Analytics Tools',
      techs: [
        'Google Analytics (Popular web analytics tool for tracking user behavior)',
      ],
    },
    {
      id: 'operating-systems',
      title: 'Operating Systems',
      techs: ['Windows, macOS (Popular choices for frontend development)'],
    },
  ];
  
  return (
    <section className={styles['c-stack']}>
      <CSlider>
      {techStackData.map((stack,index) => (
      <div className={styles['c-stack__card']} key={index}> 
        <ul>
        <h2>{stack.title}</h2>
          {stack.techs.map((tech,index) => (
          <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      ))
      }
      </CSlider>
    </section>
  )
}

export default Stack