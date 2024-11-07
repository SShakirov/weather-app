
export interface ICoordinates{
  lat: string;
  lon: string;
}

export interface IWeatherParams extends ICoordinates{
  lang?: "ru_RU" | "en_US"
  limit: number
  hours?: boolean
  extra?: boolean
}