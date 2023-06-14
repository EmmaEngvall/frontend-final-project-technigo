import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleTitle, Introduction, SingleArticleWrapper, Body, StyledMainWrapper, InnerWrapperArticles, ImgArticles, CreditTxt, Conclusion, Date } from 'styled/ArticleDetailsStyled';
import jsonData from '../utils/data.json';
import imgVarberg from '../images/article_Varberg.jpg';
import imgLofoten from '../images/article_Lofoten.jpg';
import imgCornwall from '../images/article_Cornwall.jpg';
import imgBH from '../images/article_BH.jpg';

const ArticleDetails = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState({})
  let imgSrc;
  let photoBy;
  let photographer;
  let photoFrom;

  if (articleId === '01') {
    imgSrc = imgVarberg
    photoBy = 'https://unsplash.com/fr/@samuelbryngelsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    photographer = ' Samuel Bryngelsson';
    photoFrom = 'https://unsplash.com/photos/X203X4IBQnU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  } else if (articleId === '02') {
    imgSrc = imgLofoten
    photoBy = 'https://unsplash.com/@johnygoerend?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    photographer = ' Johny Goerend';
    photoFrom = 'https://unsplash.com/photos/XWWKKdG4Arg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  } else if (articleId === '03') {
    imgSrc = imgCornwall
    photoBy = 'https://unsplash.com/@hilesy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    photographer = ' George Hiles';
    photoFrom = 'https://unsplash.com/photos/XKBiDMETQJI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  } else {
    imgSrc = imgBH
    photoBy = 'https://unsplash.com/@mannydream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    photographer = ' Manny Moreno';
    photoFrom = 'https://unsplash.com/photos/XAW5JcAsC4o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  }

  useEffect(() => {
    const articleData = jsonData.find((item) => item.id === articleId);
    setArticle(articleData);
  }, [articleId]);

  return (
    <StyledMainWrapper>
      <InnerWrapperArticles>
        <SingleArticleWrapper key={article.id}>
          <Date>{article.date}</Date>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ImgArticles src={imgSrc} alt="article destination" />
          <CreditTxt>Photo by
            <a
              href={photoBy}
              target="_blank"
              rel="noopener noreferrer">
              {photographer}
            </a> on
            <a
              href={photoFrom}
              target="_blank"
              rel="noopener noreferrer"> Unsplash
            </a>
          </CreditTxt>
          <Introduction>{article.intro}</Introduction>
          <Body>{article.body}</Body>
          <Conclusion>{article.conclusion}</Conclusion>
        </SingleArticleWrapper>
      </InnerWrapperArticles>
    </StyledMainWrapper>
  )
}

export default ArticleDetails