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
width: 255px;
gap: 10px;
padding: 10px;
margin-bottom: 15px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
font-family: Urbanist;
`
export const ErrorMessage = styled.p`
margin-top: 0;
text-align: center; 
`
export const LabelForm = styled.label`
display: flex;
justify-content: space-between;
font-family: Urbanist;
width: 100%;

&.login {
  display: none;
}
`
export const PlaceholderTxtSignUp = styled.input`
  font-family: Poppins;
  font-style: Italic;
`

export const StyledHeader = styled.h1`
font-size: 2.4rem;
text-align: center;
margin-bottom: 10px;
font-family: Urbanist;
font-weight: 500;
color: #257ca3;
`

export const SignUpText = styled.h2`
font-size: 1.8rem;
color: #4c4c4c;
text-align: center;
font-family: Caveat;
font-weight: 300;
`

export const BackgroundContainer = styled.div`
height: 30vh;
width: 100%;
margin-bottom: 4rem;

@media (min-width: 667px){
  height: 40vh;
}
@media (min-width: 1024px){
  height: 60vh;
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
  background-color: #a6a6a6;
  border: 2px solid #a6a6a6;
  color: white;
}
`