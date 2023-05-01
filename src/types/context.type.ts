export interface Country {
  name: string;
  code: string;
  capital: string;
}
export type UnitsDto = 'metric' | 'imperial';
export interface citiesContextType {
  cities: CityDto[] | null;
  selectedCity: CityDto | null;
  updateCities: (citiesList: CityDto[]) => void;
  updateSelectedCity: (selectedCity: CityDto) => void;
  units: UnitsDto;
  updateUnits: (selectedUnit: UnitsDto) => void;
}
interface CordDto {
  lat: number;
  lon: number;
}
interface CityMainTempDto {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface WindDto {
  speed: number;
  deg: number;
}
export interface sysDto {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}
interface WeatherDto {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface CityDto {
  id?: number;
  name: string;
  coord?: CordDto;
  main: CityMainTempDto | null;
  dt?: number;
  wind?: WindDto;
  sys: sysDto;
  weather: WeatherDto[] | null;
}
