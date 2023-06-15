// import dotenv from 'dotenv';
import React, { useState } from 'react';
import { StyledForm, SubmitButton } from 'styled/LoginStyled';
import { OuterWrapperWeather, PlaceholderTxt, SearchText, IconWeather, WeatherP, DetailsOuterWrapper } from 'styled/WeatherStyled';

// dotenv.config()

const Weather = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [forecast, setForecast] = useState([]);
  const [displayCity, setDisplayCity] = useState('');

  const fetchWeatherData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((fiveDay) => {
        const searchedCity = fiveDay.city.name;
        const filteredForecast = fiveDay.list.filter((item) => item.dt_txt.includes('12:00:00'));
        setForecast(filteredForecast);
        setDisplayCity(searchedCity);
      })
      .catch((error) => {
        console.error('Error fetching weather forecast:', error);
      });
  }

  const onSearchSubmit = (event) => {
    event.preventDefault();

    const citySearch = event.target.elements.citySearch.value;
    fetchWeatherData(citySearch);
  }

  return (
    <OuterWrapperWeather>
      <StyledForm onSubmit={onSearchSubmit}>
        <h2>Get ready to surf with a fresh weather report</h2>
        <SearchText htmlFor="citySearch">Search for weather in a city
          <PlaceholderTxt
            type="text"
            id="citySearch"
            placeholder="Enter a city" />
        </SearchText>
        <SubmitButton type="submit">Search</SubmitButton>
      </StyledForm>
      {(forecast.length) ? <p>Five-day weather forecast for {displayCity}</p> : ''}
      <DetailsOuterWrapper className={(forecast.length) ? 'show-background' : 'no-background'}>
        {forecast.map((item) => {
          const date = new Date(item.dt * 1000);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          const windSpeed = item.wind.speed;
          // const { description } = item.weather[0];
          const image = item.weather[0].icon;

          return (
            <div key={item.dt}>
              <WeatherP><strong>{dayName}</strong></WeatherP>
              <IconWeather src={`https://openweathermap.org/img/wn/${image}@2x.png`} alt="weather symbol" />
              {/* <WeatherP>{description}</WeatherP> */}
              <WeatherP>{item.main.temp.toFixed(1)}&nbsp;°C</WeatherP>
              <WeatherP>{windSpeed}&nbsp;m/s</WeatherP>
            </div>
          );
        })}
      </DetailsOuterWrapper>
    </OuterWrapperWeather>
  );
};

export default Weather;
