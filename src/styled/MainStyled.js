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
export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const InnerWrapperPosts = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding-top: 10px;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const SinglePostWrapper = styled.div`
  padding-left: 14px;
  padding-right: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow-wrap: break-word; 
  width: 90%;
`

export const GreetingText = styled.h1`
font-size: 2.4rem;
color: #257ca3;
text-align: center;
font-family: Caveat;
font-weight: 500;
margin-bottom: 8px;
`

export const SecondHeader = styled.h2`
font-family: Urbanist;
font-weight: 500;
font-size: 30px;
line-height: 40px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -1px;
color: #257ca3;
margin-top: 1rem;
margin-left: 20px;
`

export const StyledH3 = styled.h3`
  font-size: 1rem;
  color: #4c4c4c;
  text-align: center;
  font-family: Poppins;
  font-weight: 300;
  margin: 0;
`

export const LogoutButton = styled.button`
  border: 2px solid #73bad8;
  color: black;
  background-color: #73bad8;
  border-radius: 20px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 10px;

  &:hover {
    border: 2px solid black;
    background-color: black;
    color: white;
  }
`

export const Headline = styled.p`
  font-family: Caveat;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #257ca3;
`

export const CreditTxt = styled.p`
  font-family: Poppins;
  font-size: 0.6rem;
  color: #a6a6a6;
`

export const Location = styled.p`
  font-weight: 400;
`

export const Message = styled.p`
  font-weight: 300;
`
export const BtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`
export const SortBtn = styled.button`
  border: 2px solid #257ca3;
  color: #257ca3;
  background-color: white;
  width: 100px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border: 2px solid #257ca3;
    background-color: #257ca3;
    color: white;
  }
`
export const FilterOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const SortLevel = styled.select`
  width: 140px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
`

export const SortLocation = styled.select`
  width: 140px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
`

export const SortLabel = styled.label`
  font-family: Urbanist;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FavBtn = styled.button`
  border: 2px solid #257ca3;
  color: #257ca3;
  background-color: white;
  width: 120px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
  margin-left: 16px;

  &:focus {
    background-color: white;
    box-shadow: 0 5px #257ca3;
  }
  `

export const LikeBtn = styled.button`
  border: 2px solid #257ca3;
  color: #257ca3;
  background-color: white;
  width: 60px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;

  &:focus {
    background-color: white;
    box-shadow: 0 5px #257ca3;
  }
  `

export const LikeIcon = styled.img`
  height: 3.8vh;
  width: auto;
  padding-right: 5px;
`

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`