import styled from 'styled-components/macro';

export const OuterWrapperWeather = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const SearchText = styled.label`
    font-family: Poppins;
    font-size: 14px;
`

export const PlaceholderTxt = styled.input`
  font-family: Poppins;
  font-style: Italic;
`
export const IconWeather = styled.img`
  height: 12vw;

  @media (min-width: 667px){
  height: 3rem;
}
`
export const WeatherP = styled.p`
  margin: 0;
  font-size: 3vw;

  @media (min-width: 667px){
  font-size: 1rem;
}
`
export const DetailsOuterWrapper = styled.div`
  &.no-background {
  background-color: none;
  }
  &.show-background {
  display: flex;
  border-radius: 5px;
  justify-content: space-around;
  background-color: #a2d2df;
  padding: 5px 0;
  width: 100%;
  }
`