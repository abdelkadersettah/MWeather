import React, { useContext } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import { citiesContextType } from '../../types/context.type';
import { FiveDayWeather } from './FiveDayWeather/FiveDayWeather';
import './MyWeather.scss';
import { TodayWeather } from './TodayWeather/TodayWeather';

export const MyWeather: React.FC = () => {
  const { cities, selectedCity, units } = useContext(
    MweatherContext
  ) as citiesContextType;

  return (
    <section className="weather">
      <TodayWeather />
      <FiveDayWeather />
    </section>
  );
};
