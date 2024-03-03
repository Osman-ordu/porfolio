
import React from "react";
import style from './styles.module.scss'

const ContentBox = ({ id, title, paragraphs }) => {
  return (
    <div id={id} className={style['content_box']}>
      <ul>
      <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <li key={index}>{paragraph}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentBox;
