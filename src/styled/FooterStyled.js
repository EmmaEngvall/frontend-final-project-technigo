import styled from 'styled-components/macro';

export const StyledFooterWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #dcf3ff;
  color: #257ca3;
  font-family: Urbanist;
`
export const StyledTopText = styled.p`
  text-align: center;
`
export const StyledP = styled.p`
  margin: 0;
`
export const GithubOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 667px){
  flex-direction: row;
  gap: 25px;
}
`
export const GithubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`