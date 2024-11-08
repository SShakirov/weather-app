import _ from 'lodash'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type {
  ICurrentForecast,
  ICurrentResponse,
  IForecastDay,
  IHistoryResponse
} from '@/modules/forecastModule/store/types'

import type { ISelectOptionItem } from '@/UI/components/SelectComponent.vue'

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

  const selectedCityOptions = ref<ISelectOptionItem<string>[]>([])

  const getIsLoading = computed(() => isLoading.value)

  async function getWeatherForecast(): Promise<ICurrentForecast> {
    isLoading.value = true
    const params = {
      q: selectedCityOptions.value[0].data
    }
    const url = baseUrls.weather + urls.forecast + '?' + serializeFromObjectToQueryString(params)
    const response: ICurrentResponse = await requests.get(url)
    isLoading.value = false
    return response.current
  }

  async function getWeatherHistory(): Promise<IForecastDay[]> {
    isLoading.value = true
    const responses: IHistoryResponse[] = []
    const dates = getLastWeekDates()
    const promises = dates.map((date) => {
      const params = {
        q: selectedCityOptions.value[0].data,
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
    getIsLoading,
    selectedCityOptions,

    getWeatherForecast,
    getWeatherHistory
  }
})
