import React, { useContext, useEffect, useState } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import CountriesDataService from '../../services/countries.service';
import { Country, CountryContextType } from '../../types/context.type';
import { SelectOption } from '../../types/countries.type';
import CustomSelect from '../CustomSelect/CustomSelect';
import './Countries.scss';

export const Countries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([
    { name: '', code: '', capital: '' },
  ]);
  const { updateCountry } = useContext(MweatherContext) as CountryContextType;

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

  const HandleChange = (option: SelectOption) => {
    if (option) {
      let selectedCountry = {
        name: option.label,
        code: option.value,
        capital: option.capital,
      };
      updateCountry(selectedCountry);
      window.localStorage.setItem('country', JSON.stringify(selectedCountry));
    }
  };

  return (
    <section className="countries" data-testid="Countries">
      <form className="countries__form" onSubmit={(e) => e.preventDefault()}>
        <CustomSelect
          options={countries.map((country) => ({
            label: country.name,
            value: country.code,
            capital: country.capital,
          }))}
          onItemClick={(item) => HandleChange(item)}
        />
      </form>
    </section>
  );
};
