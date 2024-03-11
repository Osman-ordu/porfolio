import React from 'react';
import styles from './styles.module.scss'; // Import styles
import LazyLoad from 'react-lazy-load';

const ImageTextBox = ({ image, title, subTitle, text }) => {
  return (
    <div className={styles['c-container']}>
      <div className={styles['c-container__first-widget']}>
        <LazyLoad>
          <img src={image} alt={subTitle} />
        </LazyLoad>
      </div>
      <div className={styles['c-container__second-widget']}>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ImageTextBox;
