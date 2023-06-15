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

export const RadioButtonWrapper = styled.div`
display: flex;
width: 100%;
gap: 5px;
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column; 
width: 250px;
gap: 10px;
padding: 10px;
margin-bottom: 15px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`
export const ErrorMessage = styled.p`
margin-top: 0;
text-align: center; 
`
export const LabelForm = styled.label`
display: flex;
justify-content: space-between;

&.login {
  display: none;
}
`

export const StyledHeader = styled.h1`
font-size: 2.4rem;
text-align: center;
margin-bottom: 10px;
font-family: Urbanist;
font-weight: 500;
`

export const SignUpText = styled.h2`
font-size: 2rem;
color: gray;
text-align: center;
font-family: Caveat;
font-weight: 300;
`

export const BackgroundContainer = styled.div`
height: 20%;
width: 100%;

@media (min-width: 667px){
  height: 40%;
}
@media (min-width: 1024px){
  height: 60%;
}
`

export const SubmitButton = styled.button`
border: 2px solid #73BAD8;
color: black;
background-color: #73BAD8;
width: 68px;
border-radius: 20px;
font-family: Urbanist;
cursor: pointer;

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