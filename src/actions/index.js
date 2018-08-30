import axios from 'axios';

const API_KEY = "b0e69868ecc23a85343afa989e34cb84";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},no`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
