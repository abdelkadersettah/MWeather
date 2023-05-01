import React, { useContext } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import { citiesContextType } from '../../types/context.type';
import './MyWeather.scss';
import MyWeatherContent from './MyWeatherContent';

export const MyWeather: React.FC = () => {
  const { cities, selectedCity, units } = useContext(
    MweatherContext
  ) as citiesContextType;

  return (
    <section className="weather">
      <MyWeatherContent />
    </section>
  );
};
