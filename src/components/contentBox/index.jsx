
import React from "react";

const ContentBox = ({ id, title, paragraphs }) => {
  return (
    <div id={id}>
      <h2>{title}</h2>
      <ul>
        {paragraphs.map((paragraph, index) => (
          <li key={index}>{paragraph}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentBox;
