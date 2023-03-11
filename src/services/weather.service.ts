import http from '../http-commons/http-weather';
import WeatherData from '../types/countries.type';

class WeatherDataService {
  private openWeatherMapKey = process.env.REACT_APP_OPEN_WEATHER_MAP_KEY;
  get(capital: string, code: string) {
    return http.get<WeatherData>(
      `/weather?q=${capital},${code}&appid=${this.openWeatherMapKey}&units=metric`
    );
  }
}

export default new WeatherDataService();
