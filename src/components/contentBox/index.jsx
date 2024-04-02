import style from './styles.module.scss';

const ContentBox = ({ id, title, paragraphs, subTitle, history }) => {
  return (
    <div id={id} className={style['c-contentbox']}>
      <ul>
        <h2>{subTitle}</h2>
        <div className={style['c-contentbox__sub']}>
          <h3>{title}</h3>
          <span>{history}</span>
        </div>
        {paragraphs.map((paragraph, index) => (
          <li key={index}>{paragraph}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentBox;
