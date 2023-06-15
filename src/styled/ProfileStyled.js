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
export const ProfileH2 = styled.h2`
  font-family: Caveat;
  font-size: 1.8rem;  
  margin-bottom: 0px;
`
export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
  min-width: 100%;
  max-width: 100%;
`
export const InnerWrapperPosts = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding-top: 30px;
  height: 55vh;
  overflow-x: hidden;
  overflow-y: scroll;
  min-width: 100%;
  max-width: 100%;
`
export const SinglePostWrapper = styled.div`
  padding-left: 14px;
  padding-right: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow-wrap: break-word;
  min-width: 95%;
  max-width: 95%;
`

export const GreetingText = styled.h2`
  font-size: 2.4rem;
  color: #257ca3;
  text-align: center;
  font-family: Caveat;
  font-weight: 500;
  margin-bottom: 8px;
`

export const IntroText = styled.p`
  font-family: Poppins;
  text-align: center;
`
export const PostTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoutButton = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
  width: 80px;
  border-radius: 20px;
  font-family: Urbanist;
  cursor: pointer;
  margin-bottom: 16px;

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
  color: #257ca3;
  margin-bottom: 6px;
`

export const Message = styled.p`
  font-weight: 300;
`
// styling for edit
export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const EditButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
`

export const EditBtn = styled.button`
  border: 2px solid #baf2ef;
  background-color: #baf2ef;
  width: 100px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
`

export const CancelBtn = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
  width: 60px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
`

export const SaveBtn = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
  width: 60px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
`
// delete button and popup to confirm

export const DeleteBtn = styled.button`
  height: fit-content;
  cursor: pointer;
  padding: 2px;
  background: none;
  border: none;
`
export const DeleteIcon = styled.img`
  height: 3vh;
  width: auto;
`
export const ConfirmDltWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const ConfirmDltWrapperP = styled.p`
  margin: 0;
`

export const ConfirmDltBtn = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
  width: 60px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
`

export const CancelDltBtn = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
  width: 60px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
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
  width: 100px;
`

export const LikeFavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-right: 6px;
`

export const DateTxtForm = styled.p`
  color: #5d5d5d;
  margin: 0px 0px 8px 0px;
  font-family: Poppins;
  font-size: 0.8rem;
`

export const LocationForm = styled.p`
  font-weight: 400;
  font-family: Poppins;
  margin: 4px 0px;
  font-size: 0.9rem;
`
export const LevelForm = styled.p`
  font-weight: 500;
  font-family: Poppins;
  margin: 4px 0px;
  font-size: 0.9rem;
`
export const MessageForm = styled.p`
  font-weight: 300;
  font-family: Poppins;
  margin: 6px 0px;
  font-size: 0.9rem;
`