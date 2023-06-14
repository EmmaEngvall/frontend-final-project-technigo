import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Introduction } from 'styled/ArticleDetailsStyled';
import jsonData from '../utils/data.json';
import imgVarberg from '../images/article_Varberg.jpg';
import imgLofoten from '../images/article_Lofoten.jpg';
import imgCornwall from '../images/article_Cornwall.jpg';
import imgBH from '../images/article_BH.jpg';

console.log(jsonData);

const ArticleDetails = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState({})
  console.log(articleId)
  let imgSrc;

  if (articleId === '01') {
    imgSrc = imgVarberg
  } else if (articleId === '02') {
    imgSrc = imgLofoten
  } else if (articleId === '03') {
    imgSrc = imgCornwall
  } else {
    imgSrc = imgBH
  }

  useEffect(() => {
    const articleData = jsonData.find((item) => item.id === articleId);
    setArticle(articleData);
  }, [articleId]);

  console.log(article)

  return (
    <div>
      <div key={article.id}>
        <p>{article.date}</p>
        <h1>{article.title}</h1>
        <img className="article_images" src={imgSrc} alt="article destination" />
        <Introduction>{article.intro}</Introduction>
        <p>{article.body}</p>
        <p>{article.conclusion}</p>
      </div>
    </div>
  )
}

export default ArticleDetails