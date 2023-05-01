import { useContext } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import { CityDto, citiesContextType } from '../../types/context.type';

import WeatherDataService from '../../services/weather.service';

import { SearchField } from '../SearchField/SearchField';
import './Countries.scss';

type Props = {
  onSelectItem?: () => void;
};

export const Countries = ({ onSelectItem }: Props) => {
  const { updateCities, units, updateSelectedCity } = useContext(
    MweatherContext
  ) as citiesContextType;

  const HandleChange = (city: CityDto) => {
    updateSelectedCity(city);
    // updateCountry(selectedCountry);
    window.localStorage.setItem('city', JSON.stringify(city));
    onSelectItem && onSelectItem();
  };
  const handleSearchedCity = (searchKey: string) => {
    WeatherDataService.getByCity(searchKey, units).then((res) => {
      const cities: CityDto[] = res.data?.list;
      updateCities(cities);
    });
  };

  return (
    <div className="countries" data-testid="Countries">
      <form className="countries__form" onSubmit={(e) => e.preventDefault()}>
        <SearchField
          onSearch={(key) => handleSearchedCity(key)}
          onSelectItem={HandleChange}
        />
      </form>
    </div>
  );
};
