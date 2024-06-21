import React from "react";
import { useTranslation } from "react-i18next";
import { IoMdDownload } from "react-icons/io";
import styles from "./styles.module.scss";

const ViewCV = () => {
  const { t } = useTranslation();

  const handleClick = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    const baseUrl = window.location.origin;
    const pdfPath = "/pdf/resume-osmanordu.pdf";
    const fullUrl = `${baseUrl}${pdfPath}`;
    link.href = fullUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles["c-viewCv"]}>
      <span onClick={handleClick}>{t("viewCV")}</span>
      <IoMdDownload color="#fff" size={20} />
    </div>
  );
};

export default ViewCV;
