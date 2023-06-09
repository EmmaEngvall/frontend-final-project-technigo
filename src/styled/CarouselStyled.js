import styled from 'styled-components/macro';

export const ArticleContainer = styled.div`
width: 76vw;
margin-bottom: 3.4rem;

@media (min-width: 667px){
    width: 50vw;
  }
  @media (min-width: 1024px){
    width: 50vw;
  }
`

export const StyledHeadline = styled.h2`
font-family: Urbanist;
font-weight: 500;
font-size: 30px;
line-height: 40px;
text-align: center;
letter-spacing: -1px;
color: #257ca3;
margin-top: 1rem;
`

export const TitleArticle = styled.p`
font-family: Urbanist;
margin-top: 10px;
font-size: 20px;
font-weight: 600;
color: #03092E;
padding-left: 20px;
`

export const CardsArticles = styled.div`
width: 100%;
height: 50vh;
position: relative;
`

export const ImgArticles = styled.img`
 max-width: 100%;
 height: auto;
 padding-left: 4px;
 padding-right: 4px;
`