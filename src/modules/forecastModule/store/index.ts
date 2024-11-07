import _ from "lodash";
import { defineStore } from "pinia";
import { ref } from "vue";

import type { ICoordinates, IWeatherParams } from "@/modules/forecastModule/store/types";

import { baseUrls } from "@/shared/api";
import { serializeFromObjectToQueryString } from "@/shared/helpers/serialize";
import useRequest from "@/shared/hooks/requestHook";


const urls = {
  forecast: '/v2/forecast',
}

const requests = useRequest()

export const useForecastStore = defineStore("forecast", () => {
  const isLoading = ref(false);

  async function getWeatherForecast(params: IWeatherParams ):Promise<any[]>{
    isLoading.value = true;
    const url = baseUrls.weather + urls.forecast + "?" + serializeFromObjectToQueryString(params);
    const response = await requests.get(url)
    isLoading.value = false;
    return response.tasks;
  }

  async function getTodayWeatherForecast(coordinates: ICoordinates): Promise<any[]>{
    const params = {
      ...coordinates,
      limit: 1,
      extra: true,
    }
    return await getWeatherForecast(params)
  }
  async function getLastWeekWeatherForecast(coordinates: ICoordinates): Promise<any[]>{
    const params = {
      ...coordinates,
      limit: 7,
      extra: true,
    }
    return await getWeatherForecast(params)
  }



  return {
    isLoading,
    getTodayWeatherForecast,
    getLastWeekWeatherForecast,
  }

})