import React, { useState, useEffect } from "react";
import { fetchMediumArticles } from "../services/mediumService";

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
    <div>
      <h1>Medium Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <h2>{article.title}</h2>
            </a>
            <p>{article.description}</p>
            <p>{article.pubDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediumArticles;
