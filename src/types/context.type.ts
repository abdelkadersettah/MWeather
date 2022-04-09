export interface Country {
  name: string;
  code: string;
  capital: string;
}
export interface CountryContextType {
  country: Country;
  updateCountry: (country: Country) => void;
}
