import { createContext, useEffect, useState } from 'react';
import WeatherDataService from '../services/weather.service';
import {
  CityDto,
  FiveDayWeatherDto,
  UnitsDto,
  citiesContextType,
} from '../types/context.type';

export const MweatherContext = createContext<citiesContextType | null>(null);

const MweatherContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [cities, setCities] = useState<CityDto[] | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityDto | null>(null);
  const [fiveDayWeather, setFiveDayWeather] = useState<
    FiveDayWeatherDto[] | null
  >(null);
  const [units, setUnits] = useState<UnitsDto>('metric');
  const updateCities = (citiesList: CityDto[]) => {
    setCities([...citiesList]);
  };
  const updateSelectedCity = (selectedCity: CityDto) => {
    setSelectedCity(selectedCity);
  };
  const updateUnits = (unit: UnitsDto) => {
    setUnits(unit);
  };
  const updateFiveDayWeather = (weatherList: any) => {
    setFiveDayWeather(weatherList);
  };
  useEffect(() => {
    const cityLS = localStorage.getItem('city');
    const city = cityLS ? JSON.parse(cityLS) : null;
    if (city) {
      const lan = city?.coord?.lat;
      const lon = city?.coord?.lon;
      if (lan && lon)
        WeatherDataService.getByLocation(lan, lon, units).then((res) => {
          const cities: CityDto = res.data;
          updateSelectedCity(cities);
        });
    }
  }, []);
  useEffect(() => {
    const lan = selectedCity?.coord?.lat;
    const lon = selectedCity?.coord?.lon;
    if (lan && lon)
      WeatherDataService.getFiveDayWeather(lan, lon, units).then((res) => {
        const weather: FiveDayWeatherDto[] = res.data.list;
        updateFiveDayWeather(weather);
      });
  }, [selectedCity?.id, units]);

  return (
    <MweatherContext.Provider
      value={{
        cities,
        updateCities,
        selectedCity,
        updateSelectedCity,
        units,
        updateUnits,
        fiveDayWeather,
        updateFiveDayWeather,
      }}
    >
      {children}
    </MweatherContext.Provider>
  );
};
export default MweatherContextProvider;
