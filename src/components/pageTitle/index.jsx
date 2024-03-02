import styles from './styles.module.scss';



const PageTitle = ({ title }) => (
  <div className={`${styles[`c-pageTitle`]}`}>{title}</div>
);

export default PageTitle;
