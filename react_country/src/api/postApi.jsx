
import axios from "axios";

// HTTP GET METHOD
export const getCountryData = () => {
  return axios.get("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
};



// HTTP GET METHOD for individual country by name
export const getCountryIndData = (countryName) => {
  return axios.get(`https://restcountries.com/v3.1/name/${countryName}?fields=name,population,region,subregion,capital,flags,languages,currencies,timezones,borders,area,maps`);
};
