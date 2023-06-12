/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { ArticleContainer, TitleArticle, StyledHeadline, CardsArticles } from 'styled/CarouselStyled';
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
      <StyledHeadline>Articles to inspire</StyledHeadline>
      <div className="slider-container">
        <Slider {...settings}>
          <a href="/varberg">
            <CardsArticles>
              <img className="article_1" src={imgVarberg} alt="Beach in Varberg" />
              <TitleArticle>A surf summer in Varberg</TitleArticle>
            </CardsArticles>
          </a>

          <a href="/lofoten">
            <CardsArticles>
              <img className="article_2" src={imgLofoten} alt="Surfers in dry suits" />
              <TitleArticle>Cold but beautiful, surfing in Lofoten</TitleArticle>
            </CardsArticles>
          </a>

          <a href="/cornwall">
            <CardsArticles>
              <img className="article_3" src={imgCornwall} alt="Cliffs and ocean in Cornwall" />
              <TitleArticle>Beautiful Cornwall, not just pasture</TitleArticle>
            </CardsArticles>
          </a>

          <a href="/burleighheads">
            <CardsArticles>
              <img className="article_4" src={imgBH} alt="Surfers waiting for waves at Burleigh Heads" />
              <TitleArticle>Burleigh Heads never disappoints</TitleArticle>
            </CardsArticles>
          </a>
        </Slider>
      </div>
    </ArticleContainer>
  );
};

export default Carousel