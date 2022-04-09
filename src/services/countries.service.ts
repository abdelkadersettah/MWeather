import http from "../http-commons/http-countries";
import CountriesData from "../types/countries.type";

class CountriesDataService {
  getAll() {
    return http.get<CountriesData>(`/all`);
  }
  get(name: string) {
    return http.get<CountriesData>(`/name/${name}`);
  }
}

export default new CountriesDataService();
