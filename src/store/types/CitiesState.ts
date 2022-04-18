export interface WeatherItem {
  description: string;
  main: string;
}

export interface City {
  recordDate: string;
  name: string;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  sys: {
    country: string;
  };
  weather: WeatherItem[];
  wind: {
    deg: number;
    speed: number;
  };
}

export interface ForecastItem {
  temp: number;
  dt_txt: string;
}

export interface CitiesState {
  cities: City[];
  citiesFetched: boolean;
  currentSearchResult: string;
  selectedCity: string;
  selectedForecast: ForecastItem[];
}
