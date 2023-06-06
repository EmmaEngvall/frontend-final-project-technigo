// import dotenv from 'dotenv';
import React, { useState } from 'react';
import { StyledForm, SubmitButton } from 'styled/LoginStyled';

// dotenv.config()

const Weather = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [forecast, setForecast] = useState([]);
  const [citySearch, setCitySearch] = useState('')

  const onSearchSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((fiveDay) => {
        const filteredForecast = fiveDay.list.filter((item) => item.dt_txt.includes('12:00:00'));
        setForecast(filteredForecast);
      })
      .catch((error) => {
        console.error('Error fetching weather forecast:', error);
      });
  }
  return (
    <div>
      <StyledForm onSubmit={onSearchSubmit}>
        <label htmlFor="citySearch">Search for a city
          <input
            type="text"
            id="citySearch"
            value={citySearch}
            placeholder="Enter a city"
            onChange={(e) => setCitySearch(e.target.value)} />
        </label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
      {forecast.map((item) => {
        const date = new Date(item.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const windSpeed = item.wind.speed;
        const image = item.weather[0].icon

        return (
          <div key={item.dt}>
            <div className="each weekday"><strong>{dayName}</strong></div>
            <div className="forecast-temp">Temperature&nbsp;{item.main.temp.toFixed(1)}&nbsp;C</div>
            <div className="wind">Windspeed&nbsp;{windSpeed}&nbsp;m/s</div>
            <img src={`https://openweathermap.org/img/wn/${image}@2x.png`} alt="weather symbol" />
          </div>
        );
      })}
    </div>
  );
};

export default Weather