export default interface CountriesData {
  name?: string | null;
}

export interface SelectOption {
  label: string;
  value: string;
  [key: string]: string;
}
