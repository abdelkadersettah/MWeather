import { createContext, useState } from 'react';
import { CityDto, citiesContextType } from '../types/context.type';

export const MweatherContext = createContext<citiesContextType | null>(null);

const MweatherContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [cities, setCities] = useState<CityDto[] | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityDto | null>(null);
  const updateCities = (citiesList: CityDto[]) => {
    setCities([...citiesList]);
  };
  const updateSelectedCity = (selectedCity: CityDto) => {
    setSelectedCity(selectedCity);
  };
  return (
    <MweatherContext.Provider
      value={{ cities, updateCities, selectedCity, updateSelectedCity }}
    >
      {children}
    </MweatherContext.Provider>
  );
};
export default MweatherContextProvider;
