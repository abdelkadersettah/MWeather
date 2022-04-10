import React, { useContext, useEffect, useState } from "react";
import "./MyWeather.scss";
import WeatherDataService from "../../services/weather.service";
import { MweatherContext } from "../../Context/MWeatherContext";
import { CountryContextType } from "../../types/context.type";
import { WeatherState } from "../../types/weather.type";
import MyWeatherContent from "./MyWeatherContent";

const MyWeather: React.FC = () => {
  const { country } = useContext(MweatherContext) as CountryContextType;
  const [weather, setWeather] = useState<WeatherState>({
    country: "",
    capital: "",
    temperature: null,
    temperatureMin: null,
    temperatureMax: null,
    windSpeed: null,
    windDirection: null,
    humidity: null,
    pressure: null,
    icon: "",
  });
  useEffect(() => {
    let country: string | null = window.localStorage.getItem("country");
    if (country) {
      const { name, code, capital } = JSON.parse(country);
      WeatherDataService.get(capital.toLowerCase(), code.toLowerCase())
        .then((result: any) => result.data)
        .then((result: any) => {
          setWeather({
            country: name,
            capital: capital,
            temperature: Math.round(result.main.temp),
            temperatureMin: Math.round(result.main.temp_max),
            temperatureMax: Math.round(result.main.temp_min),
            windSpeed: Math.round(result.wind.speed),
            windDirection: result.wind.deg,
            humidity: result.main.humidity,
            pressure: result.main.pressure,
            icon: result.weather[0].icon,
          });
        });
    }
  }, []);

  useEffect(() => {
    const { name, code, capital } = country;
    if (code && capital) {
      WeatherDataService.get(capital.toLowerCase(), code.toLowerCase())
        .then((result: any) => result.data)
        .then((result: any) => {
          setWeather({
            country: country.name,
            capital: country.capital,
            temperature: Math.round(result.main.temp),
            temperatureMin: Math.round(result.main.temp_max),
            temperatureMax: Math.round(result.main.temp_min),
            windSpeed: Math.round(result.wind.speed),
            windDirection: result.wind.deg,
            humidity: result.main.humidity,
            pressure: result.main.pressure,
            icon: result.weather[0].icon,
          });
        });
    }
  }, [country]);

  return (
    <section className="weather">
      <MyWeatherContent weather={weather} />
    </section>
  );
};

export default MyWeather;
