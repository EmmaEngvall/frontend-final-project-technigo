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
    width: 70vw;
  }
  @media (min-width: 1024px){
    width: 50vw;
  }
  `
export const OuterWrapperDetails = styled.div`
   display: flex;
   flex-direction: column;

   @media (min-width: 667px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 667px){
    width: 40%;
  }
`
export const ContactHeader = styled.h1`
  font-family: Urbanist;
  font-weight: 500;
  font-size: 2.4rem;
  text-align: center;
`
export const ContactP = styled.p`
  font-family: Poppins;
  max-width: 100%;  
  overflow-wrap: break-word;
  text-align: center;
`
export const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height 150px;
`