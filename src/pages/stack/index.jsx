import CSlider from '../../components/slider'
import { stacks } from '../../mocks'
import styles from './styles.module.scss'

const Stack = () => {
  return (
    <section className={styles['c-stack']}>
      <CSlider>
      {stacks.map((stack,index) => (
      <div className={styles['c-stack__card']} key={index}> 
        <ul>
        <h2 className={styles['c-stack__title']}>{stack.title}</h2>
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