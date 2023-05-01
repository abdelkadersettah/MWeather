import { useContext } from 'react';
import { MweatherContext } from '../../../Context/MWeatherContext';
import { citiesContextType } from '../../../types/context.type';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import './FiveDayWeather.scss';

export const FiveDayWeather = ({}) => {
  const { cities, selectedCity, units, fiveDayWeather } = useContext(
    MweatherContext
  ) as citiesContextType;

  return (
    <>
      {selectedCity && (
        <section className="six-day-weather">
          {' '}
          {selectedCity?.name && (
            <h1 className="six-day-weather__title">
              6 Day Weather {selectedCity.name}, {selectedCity.sys.country}{' '}
            </h1>
          )}
          <ul className="six-day-weather__option-list">
            {fiveDayWeather?.map((w) => {
              return (
                <li key={w.dt}>
                  <span>{w.dt_txt}</span>
                  {w.main?.temp && (
                    <span>
                      {Math.round(w.main?.temp)}
                      {units === 'metric' ? '°c' : '°f'}
                    </span>
                  )}
                  {w.weather && (
                    <span>
                      <WeatherIcon iconCode={w.weather[0].icon} />
                    </span>
                  )}
                  <span>{w.weather[0].description}</span>
                </li>
              );
            })}
          </ul>
          {/* {selectedCity?.weather && (
            <div>
              <h2 className="today-weather__feels">
                Feels like {Math.round(selectedCity?.main?.temp ?? 0)}{' '}
                <span className="today-weather__feels--sign">°</span>
                <span className="today-weather__feels--unit">
                  {units === 'metric' ? 'C' : 'F'}.
                </span>{' '}
                <span>{selectedCity?.weather[0].description}</span>
              </h2>
            </div>
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
                {selectedCity?.wind?.speed}{' '}
                {units === 'metric' ? 'm/s N' : 'mph N'}
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
          </ul> */}
        </section>
      )}
    </>
  );
};
