// import dotenv from 'dotenv';
import React, { useState } from 'react';
import { StyledForm, SubmitButton } from 'styled/LoginStyled';

// dotenv.config()

const Weather = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [forecast, setForecast] = useState([]);
  const [citySearch, setCitySearch] = useState('');
  const [displayCity, setDisplayCity] = useState('');

  const onSearchSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((fiveDay) => {
        const searchedCity = fiveDay.city.name;
        const filteredForecast = fiveDay.list.filter((item) => item.dt_txt.includes('12:00:00'));
        setForecast(filteredForecast);
        setDisplayCity(searchedCity);
        setCitySearch('');
      })
      .catch((error) => {
        console.error('Error fetching weather forecast:', error);
      });
  }
  console.log(forecast)
  return (
    <div>
      <StyledForm onSubmit={onSearchSubmit}>
        <h2>Get ready to surf with a fresh weather report</h2>
        <label htmlFor="citySearch">Search for weather in a city
          <input
            type="text"
            id="citySearch"
            value={citySearch}
            placeholder="Enter a city"
            onChange={(e) => setCitySearch(e.target.value)} />
        </label>
        <SubmitButton type="submit">Search</SubmitButton>
      </StyledForm>
      {(forecast.length) ? <p>Five-day weather forecast for {displayCity}</p> : ''}
      {forecast.map((item) => {
        const date = new Date(item.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const windSpeed = item.wind.speed;
        const { description } = item.weather[0];
        const image = item.weather[0].icon

        return (
          <div key={item.dt}>
            <div className="each weekday"><strong>{dayName}</strong></div>
            <p>{description}</p>
            <div className="forecast-temp">Temp&nbsp;{item.main.temp.toFixed(1)}&nbsp;C</div>
            <div className="wind">Wind&nbsp;{windSpeed}&nbsp;m/s</div>
            <img src={`https://openweathermap.org/img/wn/${image}@2x.png`} alt="weather symbol" />
          </div>
        );
      })}
    </div>
  );
};

export default Weather