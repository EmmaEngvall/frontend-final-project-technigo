import styled from 'styled-components/macro';

export const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SingleArticleWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow-wrap: break-word;
  width: 80vw;
  margin-bottom: 14px;

  @media (min-width: 667px){
    width: 80vw;
  }
  @media (min-width: 1024px){
    width: 60vw;
  }
`
export const InnerWrapperArticles = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding-top: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const ArticleTitle = styled.h1`
  font-family: Urbanist;
`

export const Introduction = styled.p`
  font-family: Urbanist;
  font-size: 18px;
  font-style: Italic;
  `

export const Body = styled.p`
  font-family: Poppins;
  max-width: 100%;  
  overflow-wrap: break-word;
`

export const Conclusion = styled.p`
  font-family: Poppins;
`

export const ImgArticles = styled.img`
 max-width: 100%;
 height: auto;
`
export const CreditTxt = styled.p`
  font-family: Poppins;
  font-size: 0.6rem;
  color: #a6a6a6;
`
export const Date = styled.p`
  font-size: 1rem;
  color: #a6a6a6;
`