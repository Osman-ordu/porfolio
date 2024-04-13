import React from 'react'; // Add this line
import styles from './styles.module.scss';

const PageTitle = ({ title, icon }) => (
  <div className={`${styles[`c-pagetitle`]}`}>
    {icon && React.cloneElement(icon, { className: styles['icon'] })}
    <span>{title}</span>
  </div>
);

export default PageTitle;