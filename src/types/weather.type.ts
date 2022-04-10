export default interface WeatherData {
  capital?: string | null;
  code?: string | null;
  apiKey?: string | null;
}
export interface WeatherState {
  country: string;
  capital: string;
  temperature: number | null;
  temperatureMin: number | null;
  temperatureMax: number | null;
  windSpeed: number | null;
  windDirection: number | null;
  humidity: number | null;
  pressure: number | null;
  icon: string;
}
