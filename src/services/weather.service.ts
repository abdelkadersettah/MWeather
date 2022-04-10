import http from "../http-commons/http-weather";
import WeatherData from "../types/countries.type";

class WeatherDataService {
  get(
    capital: string,
    code: string,
    apiKey: string = "ab2b3491650934d2f148f7ea7af2869a"
  ) {
    return http.get<WeatherData>(
      `/weather?q=${capital},${code}&appid=${apiKey}&units=metric`
    );
  }
}

export default new WeatherDataService();
