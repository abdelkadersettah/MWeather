import { useContext, useEffect, useRef, useState } from 'react';
import { MweatherContext } from '../../Context/MWeatherContext';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { CityDto, citiesContextType } from '../../types/context.type';
import { SearchButton } from '../Buttons';
import './SearchField.scss';
import { Option } from './types';
type Props = {
  inputName?: string;
  id?: string;
  inputId?: string;
  onItemClick?: (item: Option) => void;
  onSearch?: (key: string) => void;
  minSearchLength?: number;
  placeholder?: string;
  onSelectItem?: (city: CityDto) => void;
};
const CountryFlag = (countryCode: string) => {
  return (
    <img
      src={`https://openweathermap.org/images/flags/${countryCode.toLowerCase()}.png`}
      alt={`${countryCode} flag`}
    />
  );
};
const WeatherIcon = (iconCode: string) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode.toLowerCase()}.png`}
      alt={`${iconCode} flag`}
    />
  );
};
export const SearchField = ({
  inputName,
  id,
  inputId,
  placeholder,
  minSearchLength = 2,
  onSearch,
  onItemClick,
  onSelectItem,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Option>();
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpenSearchResult(false));
  const { updateCities, cities, units } = useContext(
    MweatherContext
  ) as citiesContextType;

  useEffect(() => {
    if (cities && cities.length > 0) {
    }
  }, [cities]);

  const handleSelectedCity = (city: CityDto) => {
    setOpenSearchResult(false);
    onSelectItem && onSelectItem(city);
    updateCities([]);
    setInputValue('');
  };
  return (
    <div ref={ref} id={id} data-testid="customSearch" className="custom-search">
      <div className="custom-search__input-container">
        <div className="custom-search__input">
          <input
            type="text"
            name={inputName}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            id={inputId}
            data-testid="selectInput"
            placeholder={placeholder ?? 'Search...'}
          />
        </div>
        <SearchButton
          disabled={inputValue.length === 0}
          onClick={() => {
            onSearch && onSearch(inputValue);
            setOpenSearchResult(true);
          }}
        />
      </div>
      {openSearchResult && (
        <ul className="custom-search__option-list">
          {cities?.map((r) => {
            return (
              <li
                key={r.id}
                className="custom-search__item"
                onClick={() => handleSelectedCity(r)}
              >
                <span>
                  {r.name}, {r.sys.country} {CountryFlag(r?.sys?.country ?? '')}
                </span>
                {r.main?.temp && (
                  <span>
                    {Math.round(r.main?.temp)}
                    {units === 'metric' ? '°c' : '°f'}
                  </span>
                )}
                {r.weather && <span>{WeatherIcon(r.weather[0].icon)}</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
