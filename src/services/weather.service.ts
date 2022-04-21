import http, { openWeatherMapKey } from "../http-commons/http-weather";
import WeatherData from "../types/countries.type";

class WeatherDataService {
  get(capital: string, code: string, apiKey: string = openWeatherMapKey) {
    return http.get<WeatherData>(
      `/weather?q=${capital},${code}&appid=${apiKey}&units=metric`
    );
  }
}

export default new WeatherDataService();
