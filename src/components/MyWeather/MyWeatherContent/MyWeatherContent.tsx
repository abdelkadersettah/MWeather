import React from "react";
import { WeatherState } from "../../../types/weather.type";
import WindDirectionImg from "../../../assets/images/ui/wind.png";

export const MyWeatherContent: React.FC<{ weather: WeatherState }> = ({
  weather,
}) => {
  return (
    <>
      {" "}
      {weather?.country && (
        <h1 className="weather__country">{weather?.country}</h1>
      )}
      <article className="weather__container">
        {weather?.icon && (
          <img
            className="weather__img"
            src={`https://openweathermap.org/img/wn/${weather?.icon}.png`}
            alt="weather description"
          />
        )}
        {weather?.country && (
          <h2 className="weather__Temperature">
            {weather?.temperature}{" "}
            <span className="weather__Temperature--sign">°</span>
            <span className="weather__Temperature--unit">c</span>
          </h2>
        )}
      </article>
      <ul className="weather__detail">
        {weather?.temperatureMax && (
          <li className="weather__item">
            <span className="weather__title">Max Temperature</span>{" "}
            <span className="weather__number">{weather?.temperatureMax}</span>{" "}
          </li>
        )}
        {weather?.temperatureMin && (
          <li className="weather__item">
            <span className="weather__title"> Min Temperature</span>{" "}
            <span className="weather__number"> {weather?.temperatureMin}</span>{" "}
          </li>
        )}
        {weather?.windSpeed && (
          <li className="weather__item">
            <span className="weather__title">wind</span>{" "}
            <img
              style={{ transform: `rotate(${weather?.windDirection}deg)` }}
              src={WindDirectionImg}
              alt="wind direction"
              className="weather__icon"
            />{" "}
            <span className="weather__number">{weather?.windSpeed} km/h</span>
          </li>
        )}
      </ul>
      <ul className="weather__detail">
        {" "}
        {weather?.humidity && (
          <li className="weather__item">
            <span className="weather__title">Humidity</span>
            <span className="weather__number">{weather?.humidity}%</span>
          </li>
        )}
        {weather?.pressure && (
          <li className="weather__item">
            {" "}
            <span className="weather__title">Pressure</span>
            <span className="weather__number">{weather?.pressure}</span>
          </li>
        )}
      </ul>
    </>
  );
};
