import React, { useContext, useEffect, useState } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import CountriesDataService from '../../services/countries.service';
import { CityDto, Country, citiesContextType } from '../../types/context.type';

import WeatherDataService from '../../services/weather.service';

import { SearchField } from '../SearchField/SearchField';
import './Countries.scss';

export const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([
    { name: '', code: '', capital: '' },
  ]);
  const { updateCities, cities, selectedCity, updateSelectedCity } = useContext(
    MweatherContext
  ) as citiesContextType;

  useEffect(() => {
    CountriesDataService.getAll().then((response: any) => {
      let result = response.data
        .map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
          capital: country.capital ? country.capital[0] : '',
        }))
        .sort((a: Country, b: Country) => {
          return a.name.localeCompare(b.name);
        });
      setCountries([...result]);
    });
  }, []);

  const HandleChange = (city: CityDto) => {
    updateSelectedCity(city);
    // updateCountry(selectedCountry);
    window.localStorage.setItem('country', JSON.stringify(city));
  };
  const handleSearchedCity = (searchKey: string) => {
    WeatherDataService.getByCity(searchKey).then((res) => {
      const cities: CityDto[] = res.data?.list;
      updateCities(cities);
      debugger;
    });
  };

  return (
    <section className="countries" data-testid="Countries">
      <form className="countries__form" onSubmit={(e) => e.preventDefault()}>
        <SearchField
          onSearch={(key) => handleSearchedCity(key)}
          searchResult={cities}
          onSelectItem={HandleChange}
        />
      </form>
    </section>
  );
};
