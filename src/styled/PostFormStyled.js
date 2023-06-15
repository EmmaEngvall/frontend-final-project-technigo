import styled from 'styled-components/macro';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column; 
  gap: 10px;
  padding: 10px;
  margin-bottom: 15px;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`

export const PlaceholderTxt = styled.input`
  font-family: Poppins;
  font-style: Italic;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SubmitButton = styled.button`
  border: 2px solid #73BAD8;
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

export const ResetButton = styled.button`
  border: 2px solid #baf2ef;
  background-color: #baf2ef;
  width: 68px;
  border-radius: 20px;
  font-family: Urbanist;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
    background-color: black;
    color: white;
  }
`

export const LevelTxt = styled.p`
  margin: 8px 0px 0px 0px;
`

export const LevelOptions = styled.label`
  font-family: Urbanist;
  font-size: 0.9rem;
`