export default interface WeatherData {
  capital?: string | null;
  code?: string | null;
  apiKey?: string | null;
}
export interface WeatherState {
  country: string;
  capital: string;
  temperature: number | undefined;
  temperatureMin: number | undefined;
  temperatureMax: number | undefined;
  windSpeed: number | undefined;
  windDirection: number | undefined;
  humidity: number | undefined;
  pressure: number | undefined;
  icon: string;
}
