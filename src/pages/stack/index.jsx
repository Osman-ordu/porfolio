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

  ]


  return (
    <section>
      {techStackData && techStackData.map((stack,index) => (
      <div key={index}> 
        <h2>{stack.title}</h2>
        <ul>
          {stack.techs.map((tech) => (
          <li>{tech}</li>
          ))}
        </ul>
      </div>
      ))
      }
    </section>
  )
}

export default Stack