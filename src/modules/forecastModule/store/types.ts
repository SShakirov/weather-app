export interface IWeatherParams {
  lang?: 'ru_RU' | 'en_US'
  q: string
  hours?: boolean
  extra?: boolean
}

export interface IHistoryResponse {
  forecast: IForecast
}
export interface ICurrentResponse {
  current: ICurrentForecast
}

export interface ICurrentForecast{
  condition: IForecastCondition
  temp_c: number
  humidity: number
}
export interface IForecast {
  forecastday: IForecastDay[]
}
export interface IForecastDay {
  date: string
  day: IForecastDayData
}
export interface IForecastDayData {
  condition: IForecastCondition
  avghumidity: number
  avgtemp_c: number
}

export interface IForecastCondition {
  icon: string
  text: string
}
