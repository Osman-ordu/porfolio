import styles from './styles.module.scss';

const PageTitle = ({ title }) => <div className={`${styles[`c-pagetitle`]}`}>{title}</div>;

export default PageTitle;
