import http from '../http-commons/http-weather';
import { UnitsDto } from '../types/context.type';
import WeatherData from '../types/countries.type';

class WeatherDataService {
  private openWeatherMapKey = process.env.REACT_APP_OPEN_WEATHER_MAP_KEY;
  get(capital: string, code: string, unit: UnitsDto) {
    return http.get<WeatherData>(
      `/weather?q=${capital},${code}&appid=${this.openWeatherMapKey}&units=${unit}`
    );
  }
  getByCity(city: string, unit: UnitsDto) {
    return http.get<any>(
      `/find?q=${city}&appid=${this.openWeatherMapKey}&units=${unit}`
    );
  }
  getByLocation(lat: number, lon: number, unit: UnitsDto) {
    return http.get<any>(
      `weather?lat=${lat}&lon=${lon}&appid=${this.openWeatherMapKey}&units=${unit}`
    );
  }
  getFiveDayWeather(lat: number, lon: number, unit: UnitsDto) {
    return http.get<any>(
      `forecast?lat=${lat}&lon=${lon}&appid=${this.openWeatherMapKey}&units=${unit}`
    );
  }
}

export default new WeatherDataService();
