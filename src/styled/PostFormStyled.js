import styled from 'styled-components/macro';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column; 
  width: 250px;
  gap: 10px;
  padding: 10px;
  margin-bottom: 15px;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const SubmitButton = styled.button`
  border: 2px solid #257ca3;
  color: white;
  background-color: #257ca3;
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