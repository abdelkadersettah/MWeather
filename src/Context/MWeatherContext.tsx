import { createContext, useState } from "react";
import { CountryContextType, Country } from "../types/context.type";

export const MweatherContext = createContext<CountryContextType | null>(null);

const MweatherContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [country, setCountry] = useState<Country>({
    name: "",
    code: "",
    capital: "",
  });
  const updateCountry = (country: Country) => {
    setCountry({ ...country });
    console.log(country);
  };
  return (
    <MweatherContext.Provider value={{ country, updateCountry }}>
      {children}
    </MweatherContext.Provider>
  );
};
export default MweatherContextProvider;
