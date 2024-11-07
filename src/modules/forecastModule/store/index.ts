import _ from 'lodash'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { ICurrentForecast, ICurrentResponse, IForecastDay, IHistoryResponse, IWeatherResponse } from '@/modules/forecastModule/store/types'

import { baseUrls } from '@/shared/api'
import { getLastWeekDates } from '@/shared/helpers/format'
import { serializeFromObjectToQueryString } from '@/shared/helpers/serialize'
import useRequest from '@/shared/hooks/requestHook'

const urls = {
  forecast: '/v1/current.json',
  history: '/v1/history.json'
}

const requests = useRequest()

export const useForecastStore = defineStore('forecast', () => {
  const isLoading = ref(false)

  async function getWeatherForecast(city: string): Promise<ICurrentForecast> {
    isLoading.value = true
    const params = {
      q: city
    }
    const url = baseUrls.weather + urls.forecast + '?' + serializeFromObjectToQueryString(params)
    const response: ICurrentResponse = await requests.get(url)
    isLoading.value = false
    return response.current
  }

  async function getWeatherHistory(city: string): Promise<IForecastDay[]> {
    isLoading.value = true
    const responses: IHistoryResponse[] = []
    const dates = getLastWeekDates()
    const promises = dates.map((date) => {
      const params = {
        q: city,
        dt: date
      }
      const url = baseUrls.weather + urls.history + '?' + serializeFromObjectToQueryString(params)
      return requests.get(url).then((response) => responses.push(response))
    })

    try {
      await Promise.all(promises)
    } catch (e) {
      console.error(e)
    }

    isLoading.value = false
    return responses.map((response) => response.forecast.forecastday[0])
  }

  return {
    isLoading,
    getWeatherForecast,
    getWeatherHistory
  }
})
