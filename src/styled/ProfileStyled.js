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
  gap: 10px;
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
`
export const SinglePostWrapper = styled.div`
  padding-left: 14px;
  padding-right: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow-wrap: break-word;
  width: 90%;
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
  margin-bottom: 4px;
  color: #257ca3;
`

export const Location = styled.p`
  font-weight: 400;
`

export const Message = styled.p`
  font-weight: 300;
`

export const EditBtn = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
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

export const DeleteBtn = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
  width: 100px;
  border-radius: 5px;
  font-family: Urbanist;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;

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