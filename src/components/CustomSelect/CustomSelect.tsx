import { useEffect, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';
import './CustomSelect.scss';
import { Option, Options } from './types';
type Props = {
  options: Options<Option>;
  inputName?: string;
  id?: string;
  inputId?: string;
  onItemClick?: (item: Option) => void;
  placeholder?: string;
};

const CustomSelect = ({
  options,
  inputName,
  id,
  inputId,
  placeholder,
  onItemClick,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [openOptionList, setOpenOptionList] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [optionsState, setOptionsState] = useState<Options<Option>>([]);
  const handleSelectedItem = (item: Option) => {
    setSelectedOption(item);
    setInputValue(item.label);
    setOpenOptionList(false);
    setOptionsState(options);
    onItemClick && onItemClick(item);
  };
  const handleOpenOptionList = () => {
    setOpenOptionList(true);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedKey = e.target.value.trim().toLowerCase();
    if (searchedKey) {
      const filteredOption = options.filter(
        (o) =>
          o.label.toLowerCase().includes(searchedKey) ||
          o.value.toLowerCase().includes(searchedKey)
      );
      setSelectedOption(undefined);
      setInputValue(searchedKey);
      setOptionsState(filteredOption);
    } else {
      setOptionsState(options);
      setInputValue(searchedKey);
    }
  };
  useEffect(() => {
    setOptionsState(options);
  }, [options]);
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        openOptionList &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpenOptionList(false);
      }
      // @ts-ignore
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openOptionList]);

  return (
    <div ref={ref} id={id} data-testid="customSelect" className="custom-select">
      <div
        style={{ display: 'grid' }}
        className="custom-select__input-container"
      >
        <div className="custom-select__input">
          <input
            type="text"
            name={inputName}
            onChange={(e) => handleSearch(e)}
            value={inputValue}
            id={inputId}
            data-testid="selectInput"
            onFocus={handleOpenOptionList}
            placeholder={placeholder ?? 'Select...'}
          />
        </div>
        <div
          className="custom-select__indicator"
          data-testid="selectIndicator"
          onClick={handleOpenOptionList}
        >
          <ArrowIcon className="custom-select__indicator--arrow" />
        </div>
      </div>
      {openOptionList && (
        <ul className="custom-select__option-list">
          {optionsState?.map((c: Option) => (
            <li
              key={c.value}
              className={[
                'custom-select__item',
                c.label === selectedOption?.label
                  ? 'custom-select__item--selected'
                  : '',
              ].join(' ')}
              onClick={() => handleSelectedItem(c)}
            >
              {c?.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
