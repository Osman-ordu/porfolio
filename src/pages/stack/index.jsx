import CSlider from '../../components/slider'
import styles from './styles.module.scss'

const Stack = () => {
  const techStackData = [
    {
      id:'ides',
      title:'IDEs',
      techs:['Visual Studio','Visual Studio Code','Eclipse'],
    },
    {
      id:'version-control-systems',
      title:'Version Control Systems',
      techs:['Git','Subversion'],
    },
    {
      id:'debugging-tools',
      title:'Debugging Tools',
      techs:['Google Chrome','VS Debugger','Eclipse Debugger'],
    },
    {
      id:'package-managers',
      title:'Package Managers',
      techs:['NPM','YARN'],
    },
    {
      id:'operating-systems',
      title:'Operating Systems',
      techs:['Windows','Macos'],
    },
    {
      id:'programming-languages',
      title:'Programming Languages',
      techs:['Javascript','Typescript','Nodejs','Java',],
    },
    {
      id:'frameworks',
      title:'frameworks',
      techs:['React','Angular'],
    },
    {
      id:'styles',
      title:'Styles',
      techs:['Pure-css','Bootstrap','Sass & Scss','Less','Ant Design','Material UI','Tailwind.css'],
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