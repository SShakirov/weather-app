<template>
  <div class="">
    <WeatherCard
      v-if="currentForecast"
      :condition="currentForecast.condition"
      :humidity="currentForecast.humidity"
      :time="formatTime()"
      :windSpeed='currentForecast.wind_kph'
      :temperature='currentForecast.temp_c'
      location='Kazan'
    ></WeatherCard>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'

import { useForecastStore } from '@/modules/forecastModule/store'
import type { ICurrentForecast } from '@/modules/forecastModule/store/types'

import WeatherCard from '@/components/WeatherCard.vue'

import { formatDateFromString } from "@/shared/helpers/format";

const forecastStore = useForecastStore()

const currentForecast = ref<undefined | ICurrentForecast>(undefined)

function formatTime(){
  if (!currentForecast.value) return ""
  return "Last updated " + formatDateFromString(currentForecast.value.last_updated, 'HH:mm')
}
onBeforeMount(async () => {
  currentForecast.value = await forecastStore.getWeatherForecast('Kazan')
})
</script>
