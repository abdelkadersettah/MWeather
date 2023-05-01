import { useContext, useEffect } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import WeatherDataService from '../../services/weather.service';
import { CityDto, citiesContextType } from '../../types/context.type';
import { Countries } from '../Countries/Countries';
import './WeatherFilter.scss';

type Props = {};

export const WeatherFilter = (props: Props) => {
  const { updateUnits, units, selectedCity, updateSelectedCity } = useContext(
    MweatherContext
  ) as citiesContextType;
  const handleChangeUnits = () => {
    const lan = selectedCity?.coord?.lat;
    const lon = selectedCity?.coord?.lon;
    if (lan && lon)
      WeatherDataService.getByLocation(lan, lon, units).then((res) => {
        const cities: CityDto = res.data;
        window.localStorage.setItem('city', JSON.stringify(cities));
        updateSelectedCity(cities);
      });
  };
  useEffect(() => {
    handleChangeUnits();
  }, [units]);
  return (
    <section className="weather-filter">
      <Countries />
      <ul className="switch-container">
        <li
          className={[
            'switch-container__item',
            units === 'metric' ? 'switch-container__item--active' : '',
          ].join(' ')}
          onClick={() => updateUnits('metric')}
        >
          Metric: °C
        </li>
        <li
          className={[
            'switch-container__item',
            units === 'imperial' ? 'switch-container__item--active' : '',
          ].join(' ')}
          onClick={() => updateUnits('imperial')}
        >
          Imperial: °F
        </li>
      </ul>
    </section>
  );
};
