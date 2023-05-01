import { createContext, useEffect, useState } from 'react';
import WeatherDataService from '../services/weather.service';
import { CityDto, UnitsDto, citiesContextType } from '../types/context.type';

export const MweatherContext = createContext<citiesContextType | null>(null);

const MweatherContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [cities, setCities] = useState<CityDto[] | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityDto | null>(null);
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

  return (
    <MweatherContext.Provider
      value={{
        cities,
        updateCities,
        selectedCity,
        updateSelectedCity,
        units,
        updateUnits,
      }}
    >
      {children}
    </MweatherContext.Provider>
  );
};
export default MweatherContextProvider;
