import React, { useState, useEffect } from "react";
import { fetchMediumArticles } from "../../services/mediumService";
import styles from "./styles.module.scss";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchMediumArticles();
      setArticles(articles);
    };

    getArticles();
  }, []);

  return (
    <section className={styles["c-articles"]}>
      {articles.map((article, index) => (
        <div className={styles["c-articles__article"]} key={index}>
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            <h2>{article.title}</h2>
          </a>
          <p>{article.description}</p>
          <p>{article.pubDate}</p>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      ))}
    </section>
  );
};

export default MediumArticles;
