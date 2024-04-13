import React from 'react';
import styles from './styles.module.scss';

const PageTitle = ({ title, icon }) => (
  <div className={`${styles[`c-pagetitle`]}`}>
    {icon && React.cloneElement(icon, { className: styles['c-pagetitle__icon'] })}
    <span>{title}</span>
  </div>
);

export default PageTitle;