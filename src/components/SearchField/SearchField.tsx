import { useEffect, useRef, useState } from 'react';
import { CityDto } from '../../types/context.type';
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
  searchResult: CityDto[] | null;
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
  searchResult,
  onSelectItem,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        openSearchResult &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpenSearchResult(false);
      }
      // @ts-ignore
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openSearchResult]);
  useEffect(() => {
    if (searchResult && searchResult.length > 0) {
      setOpenSearchResult(true);
    }
  }, [searchResult]);

  const handleSelectedCity = (city: CityDto) => {
    setOpenSearchResult(false);
    onSelectItem && onSelectItem(city);
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
            onFocus={(e) => console.log(e)}
            placeholder={placeholder ?? 'Search...'}
          />
        </div>
        <SearchButton onClick={() => onSearch && onSearch(inputValue)} />
      </div>
      {openSearchResult && (
        <ul className="custom-search__option-list">
          {searchResult?.map((r) => {
            return (
              <li
                key={r.id}
                className="custom-search__item"
                onClick={() => handleSelectedCity(r)}
              >
                <span>
                  {r.name}, {r.sys.country} {CountryFlag(r?.sys?.country ?? '')}
                </span>
                {r.main?.temp && <span>{Math.round(r.main?.temp)}°c</span>}
                {r.weather && <span>{WeatherIcon(r.weather[0].icon)}</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
