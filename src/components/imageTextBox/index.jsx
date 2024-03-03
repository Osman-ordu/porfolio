import React from 'react';
import styles from './styles.module.scss'; // Import styles

const ImageTextBox = ({ image, title, subTitle, text }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container__widget__first']}>
        <img src={image} alt={subTitle} />
      </div>
      <div className={styles['container__widget__second']}>
        <h2>{title}</h2>
        <h5>{subTitle}</h5>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ImageTextBox;
