import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from './data.json';

console.log(jsonData);

const ArticleDetails = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState({})
  console.log(articleId)

  useEffect(() => {
    const articleData = jsonData.find((item) => item.id === articleId);
    setArticle(articleData);
  }, [articleId]);

  console.log(article)

  return (
    <div>
      <div key={article.id}>
        <h1>{article.title}</h1>
        <p>{article.intro}</p>
        <p>{article.body}</p>
        <p>{article.conclusion}</p>
      </div>
    </div>
  )
}

export default ArticleDetails

// Add weather forecast for destination?