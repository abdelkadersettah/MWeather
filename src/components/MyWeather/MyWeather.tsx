import React, { useContext, useEffect, useState } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import { citiesContextType } from '../../types/context.type';
import './MyWeather.scss';
import MyWeatherContent from './MyWeatherContent';

export const MyWeather: React.FC = () => {
  const { cities, selectedCity } = useContext(
    MweatherContext
  ) as citiesContextType;
  const [weather, setWeather] = useState<any>({
    temperature: undefined,
    temperatureMin: undefined,
    temperatureMax: undefined,
    windSpeed: undefined,
    windDirection: undefined,
    humidity: undefined,
    pressure: undefined,
    icon: '',
  });
  useEffect(() => {
    // let country: string | null = window.localStorage.getItem('country');
    // if (country) {
    //   const { name, code, capital } = JSON.parse(country);
    //   WeatherDataService.get(capital.toLowerCase(), code.toLowerCase())
    //     .then((result: any) => result.data)
    //     .then((result: any) => {
    //       setWeather({
    //         country: name,
    //         capital: capital,
    //         temperature: Math.round(selectedCity?.main?.temp ?? 0),
    //         temperatureMin: Math.round(selectedCity?.main?.temp_max ?? 0),
    //         temperatureMax: Math.round(selectedCity?.main?.temp_min ?? 0),
    //         windSpeed: Math.round(selectedCity?.wind?.speed ?? 0),
    //         windDirection: selectedCity?.wind?.deg,
    //         humidity: selectedCity?.main?.humidity,
    //         pressure: selectedCity?.main?.pressure,
    //         icon: selectedCity?.weather ? selectedCity?.weather[0].icon : '',
    //       });
    //     });
    // }
  }, []);

  useEffect(() => {
    if (selectedCity) {
      setWeather({
        temperature: Math.round(selectedCity?.main?.temp ?? 0),
        temperatureMin: Math.round(selectedCity?.main?.temp_max ?? 0),
        temperatureMax: Math.round(selectedCity?.main?.temp_min ?? 0),
        windSpeed: Math.round(selectedCity?.wind?.speed ?? 0),
        windDirection: selectedCity?.wind?.deg,
        humidity: selectedCity?.main?.humidity,
        pressure: selectedCity?.main?.pressure,
        icon: selectedCity?.weather ? selectedCity?.weather[0].icon : '',
      });
    } else {
    }
  }, [selectedCity]);

  return (
    <section className="weather">
      <MyWeatherContent weather={weather} />
    </section>
  );
};
