import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Block() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/NickKern/fake-json-museum/db")
      .then((response) => {
        setArticles(response.data.articles);
      });
  }, []);

  return (
    <div className='block'>
      {articles.map((article) => {
        return (
          <article key={article.id}>
            <img src={article.img} className='visiting-pic' alt={article.alt} />
            <h3>{article.title}</h3>
            <div className='min-line'></div>
            <p>{article.p}</p>
            <div className='p1'>{article.p1}</div>
          </article>
        );
      })}
    </div>
  );
}
