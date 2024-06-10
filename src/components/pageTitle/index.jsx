import React from "react";
import styles from "./styles.module.scss";

const PageTitle = ({ title, icon }) => (
  <div className={`${styles[`c-pagetitle`]}`}>
    <span>{title}</span>
    {icon && React.cloneElement(icon, { className: styles["c-pagetitle__icon"] })}
  </div>
);

export default PageTitle;
