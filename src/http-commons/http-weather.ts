import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  headers: {
    "Content-type": "application/json",
  },
});
export const openWeatherMapKey = "ab2b3491650934d2f148f7ea7af2869a";
