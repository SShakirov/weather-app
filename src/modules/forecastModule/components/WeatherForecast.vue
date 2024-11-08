<template>
  <div class="">
    <div class="row d-flex justify-content-center py-5">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <Transition name="fade-slide-v">
        <WeatherCard
          v-if="currentForecast"
          :condition="currentForecast.condition"
          :humidity="currentForecast.humidity"
          :time="formatTime()"
          :windSpeed="currentForecast.wind_kph"
          :temperature="currentForecast.temp_c"
          :location="forecastStore.selectedCityOptions[0].text"
          :isLoading="forecastStore.getIsLoading"
        ></WeatherCard>
      </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { useForecastStore } from '@/modules/forecastModule/store'
import type { ICurrentForecast } from '@/modules/forecastModule/store/types'

import WeatherCard from '@/components/WeatherCard.vue'

import { formatDateFromString } from '@/shared/helpers/format'

const forecastStore = useForecastStore()

const currentForecast = ref<undefined | ICurrentForecast>(undefined)

function formatTime() {
  if (!currentForecast.value) return ''
  return 'Last updated ' + formatDateFromString(currentForecast.value.last_updated, 'HH:mm')
}

watch(
  () => forecastStore.selectedCityOptions,
  async () => {
    currentForecast.value = await forecastStore.getWeatherForecast()
  },
  { deep: true, immediate: true }
)
</script>
