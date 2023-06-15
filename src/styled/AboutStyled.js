import styled from 'styled-components/macro';

export const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  gap: 15px;

  @media (min-width: 667px){
    width: 50vw;
  }
  @media (min-width: 1024px){
    width: 50vw;
  }
  `
export const AboutHeader = styled.h1`
  font-family: Urbanist;
  font-weight: 500;
  font-size: 2.4rem;
  text-align: center;
  color: #257ca3;
`
export const AboutH2 = styled.h2`
  font-family: Caveat;
  color: #257ca3;
  font-size: 1.8rem;  
  margin-bottom: 0px;
  margin-top: 30px;

  @media (min-width: 667px){
  margin-top: 0px;
  }
`
export const AboutH3 = styled.h3`
  font-family: Caveat;
  color: #257ca3;
  font-size: 1.8rem;  
  margin-bottom: 0px;
  margin-top: 14px;
`
export const AboutP = styled.p`
  font-family: Poppins;
  max-width: 100%;  
  overflow-wrap: break-word;
  text-align: center;
  margin: 4px 0px;
`

export const BackgroundContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 30vh;
width: 100%;
margin-bottom: 2rem;

@media (min-width: 667px){
  height: 40vh;
  margin-bottom: 2rem;
}
@media (min-width: 1024px){
  height: 60vh;
  width: auto;
  margin-bottom: 2rem;
}
`

export const BackgroundImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%
`

export const HandIcon = styled.img`
  height: 3.8vh;
  width: auto;
`

export const Signature = styled.p`
  margin: 6px 0px;
`

export const AboutCreditTxt = styled.p`
  font-family: Poppins;
  font-size: 0.6rem;
  color: #a6a6a6;
`