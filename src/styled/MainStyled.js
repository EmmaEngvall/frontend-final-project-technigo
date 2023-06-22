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
  min-width: 100%;
  max-width: 100%;

  @media (min-width: 1024px){
    width: 80%;
  }
`
export const InnerWrapperPosts = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  max-width: 100%;
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
  min-width: 95%;
  max-width: 95%;
`

export const GreetingText = styled.h1`
font-size: 2.6rem;
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
margin: 0px;
`

export const StyledH3 = styled.h3`
  font-size: 1.2rem;
  color: #4c4c4c;
  text-align: center;
  font-family: Urbanist;
  font-weight: 400;
  margin: 0;
`

export const LogoutButton = styled.button`
  border: 2px solid #73bad8;
  color: black;
  background-color: #73bad8;
  border-radius: 20px;
  font-family: Urbanist;
  font-size: 1rem;
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

export const DateTxt = styled.p`
  color: #5d5d5d;
  margin: 0px 0px 8px 0px;
  font-family: Poppins;
  font-size: 0.8rem;
`

export const Location = styled.p`
  font-weight: 400;
  font-family: Poppins;
  margin: 4px 0px;
  font-size: 0.9rem;
`
export const Level = styled.p`
  font-weight: 500;
  font-family: Poppins;
  margin: 4px 0px;
  font-size: 0.9rem;
`
export const Message = styled.p`
  font-weight: 300;
  font-family: Poppins;
  margin: 6px 0px;
  font-size: 0.9rem;
`
export const BtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`
export const SortBtn = styled.button`
border: 2px solid #73BAD8;
color: black;
background-color: #73BAD8;
width: 100px;
border-radius: 10px;
font-family: Urbanist;
font-weight: 500;
cursor: pointer;
padding: 4px;
margin-top: 10px;

&:hover {
  border: 2px solid black;
  background-color: black;
  color: white;
}

&:disabled {
  background-color: #e3e4e6;
  border: 2px solid #e3e4e6;
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
  margin-top: 3px;
  padding: 4px;
`

export const SortLocation = styled.select`
  width: 140px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  margin-top: 3px;
  padding: 4px;
`

export const SortLabel = styled.label`
  font-family: Urbanist;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`

export const FavBtn = styled.button`
  border: 2px solid #73BAD8;
  color: black;
  background-color: #73BAD8;
  width: 80px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
  margin-bottom: 0px;
  margin-left: 6px;

  &:disabled {
    background-color: #bfbfbf;
    border: 2px solid #bfbfbf;
  }
  `

export const LikeBtn = styled.button`
  background-color: white;
  border: none;
  width: 100px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  `

export const LikeIcon = styled.img`
  height: 3.8vh;
  width: auto;
  padding-right: 5px;
`
export const LikeAmountP = styled.p`
  color: black;
  font-weight: 300;
  font-family: Poppins;
  margin: 6px 0px;
  font-size: 0.9rem;
`

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
`

export const LikeFavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-right: 6px;
`
