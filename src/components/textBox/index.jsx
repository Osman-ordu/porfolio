import style from './styles.module.scss';

const TextBox = ({ title, subTitle, text }) => {
  return (
    <div className={style['c-content']}>
      <h3>{title}</h3>
      <h5>{subTitle}</h5>
      <p>{text}</p>
    </div>
  );
};

export default TextBox;
