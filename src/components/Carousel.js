/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { ArticleContainer, TitleArticle, StyledHeadline, CardsArticles, ImgArticles } from 'styled/CarouselStyled';
import { CreditTxt } from 'styled/MainStyled';
import imgVarberg from '../images/article_Varberg.jpg';
import imgLofoten from '../images/article_Lofoten.jpg';
import imgCornwall from '../images/article_Cornwall.jpg';
import imgBH from '../images/article_BH.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <ArticleContainer>
      <StyledHeadline>Articles</StyledHeadline>
      <div className="slider-container">
        <Slider {...settings}>
          <CardsArticles>
            <Link
              key="01"
              to="/singleArticle/01">
              <TitleArticle>Sweden&apos;s Coastal Gem: Varberg</TitleArticle>
              <ImgArticles src={imgVarberg} alt="Beach in Varberg" />
            </Link>
            <CreditTxt>Photo by
              <a
                href="https://unsplash.com/@samuelbryngelsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> Samuel Bryngelsson
              </a> on
              <a
                href="https://unsplash.com/photos/X203X4IBQnU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> Unsplash
              </a>
            </CreditTxt>
          </CardsArticles>

          <CardsArticles>
            <Link
              key="02"
              to="/singleArticle/02">
              <TitleArticle>Cold but beautiful, surfing in Lofoten</TitleArticle>
              <ImgArticles src={imgLofoten} alt="Surfers in dry suits" />
            </Link>
            <CreditTxt>Photo by
              <a
                href="https://unsplash.com/@johnygoerend?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> Johny Goerend
              </a> on
              <a
                href="https://unsplash.com/photos/XWWKKdG4Arg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> Unsplash
              </a>
            </CreditTxt>
          </CardsArticles>

          <CardsArticles>
            <Link
              key="03"
              to="/singleArticle/03">
              <TitleArticle>Beautiful Cornwall, not just pasture</TitleArticle>
              <ImgArticles src={imgCornwall} alt="Cliffs and ocean in Cornwall" />
            </Link>
            <CreditTxt>Photo by
              <a
                href="https://unsplash.com/@hilesy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> George Hiles
              </a> on
              <a
                href="https://unsplash.com/photos/XKBiDMETQJI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> Unsplash
              </a>
            </CreditTxt>
          </CardsArticles>

          <CardsArticles>
            <Link
              key="04"
              to="/singleArticle/04">
              <TitleArticle>Burleigh Heads never disappoints</TitleArticle>
              <ImgArticles src={imgBH} alt="Surfers waiting for waves at Burleigh Heads" />
            </Link>
            <CreditTxt>Photo by
              <a
                href="https://unsplash.com/@mannydream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> Manny Moreno
              </a> on
              <a
                href="https://unsplash.com/photos/XAW5JcAsC4o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"> Unsplash
              </a>
            </CreditTxt>
          </CardsArticles>
        </Slider>
      </div>
    </ArticleContainer>
  );
};

export default Carousel