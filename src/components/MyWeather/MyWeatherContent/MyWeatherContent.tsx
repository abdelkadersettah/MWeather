import { useContext } from 'react';
import { MweatherContext } from '../../../Context/MWeatherContext';
import HumidityIcon from '../../../assets/images/ui/humidity.svg';
import SunriseIcon from '../../../assets/images/ui/sunrise.svg';
import SunsetIcon from '../../../assets/images/ui/sunset.svg';
import { citiesContextType } from '../../../types/context.type';
import { getTimeFromTimestamp } from '../../../utils/getTimeFromTimestamp';
import WindIcon from '../../WindIcon/WindIcon';

export const MyWeatherContent = ({}) => {
  const { cities, selectedCity, units } = useContext(
    MweatherContext
  ) as citiesContextType;

  return (
    <section className="today-weather">
      {' '}
      {selectedCity?.name && (
        <h1 className="today-weather__country">
          {selectedCity.name}, {selectedCity.sys.country}{' '}
        </h1>
      )}
      {selectedCity?.weather && (
        <p>
          <h2 className="today-weather__feels">
            Feels like {Math.round(selectedCity?.main?.temp ?? 0)}{' '}
            <span className="today-weather__feels--sign">°</span>
            <span className="today-weather__feels--unit">
              {units === 'metric' ? 'C' : 'F'}.
            </span>{' '}
            <span>{selectedCity?.weather[0].description}</span>
          </h2>
        </p>
      )}
      <div className="today-weather__container">
        {selectedCity?.weather && (
          <img
            className="today-weather__img"
            src={`https://openweathermap.org/img/wn/${selectedCity?.weather[0].icon}.png`}
            alt="weather description"
          />
        )}
        {selectedCity?.main?.temp && (
          <h2 className="today-weather__Temperature">
            {Math.round(selectedCity?.main?.temp)}{' '}
            <span className="today-weather__Temperature--sign">°</span>
            <span className="today-weather__Temperature--unit">
              {units === 'metric' ? 'C' : 'F'}
            </span>
          </h2>
        )}
      </div>
      <ul className="today-weather__detail">
        <li>
          <span>
            <img src={HumidityIcon} alt="hmidity" width={18} />
          </span>
          <span>Humidity:</span>
          <span>{selectedCity?.main?.humidity}%</span>
        </li>
        <li>
          <span>
            <WindIcon
              style={{
                transform: `rotate(${selectedCity?.wind?.deg}deg)`,
                width: '18px',
              }}
            />
          </span>
          <span>
            {selectedCity?.wind?.speed} {units === 'metric' ? 'm/s N' : 'mph N'}
          </span>
        </li>
        <li>
          <span>
            <img src={SunriseIcon} alt="icon sunrise" width={18} />
          </span>
          <span>Sunrise:</span>
          <span>
            {' '}
            {selectedCity?.sys.sunrise
              ? getTimeFromTimestamp(selectedCity?.sys.sunrise)
              : ''}
          </span>
        </li>
        <li>
          <img src={SunsetIcon} alt="icon sunset" width={18} />

          <span>Sunset:</span>
          <span>
            {selectedCity?.sys.sunset
              ? getTimeFromTimestamp(selectedCity?.sys.sunset)
              : ''}
          </span>
        </li>
      </ul>
    </section>
  );
};
