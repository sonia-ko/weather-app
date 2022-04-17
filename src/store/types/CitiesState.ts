export interface City {
  city: string;
  country: string;
  weatherDescription: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  windSpeed: number;
}

export interface CitiesState {
  cities: City[];
  citiesFetched: boolean;
}
