import UseIsMobile from '../isMobile';
import style from './styles.module.scss';

const ContentBox = ({ id, title, paragraphs, subTitle, history, image, state }) => {
  const isMobile = UseIsMobile();
  return (
    <div id={id} className={style['c-contentbox']}>
      <div className={style['c-contentbox__main']}>
        <div className={style['c-contentbox__head']}>
          {!isMobile && (
            <h2>
              <img src={image} alt="/" />
              {subTitle} | {title}
            </h2>
          )}
          {isMobile && (
            <>
              <h2>
                <img src={image} alt="/" />
                {subTitle}
              </h2>
              <div>{title}</div>
            </>
          )}
          <span>
            {state}
            {history}
          </span>
        </div>
        <ul>
          {paragraphs.map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentBox;
