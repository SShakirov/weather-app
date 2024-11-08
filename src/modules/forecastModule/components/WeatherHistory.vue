<template>
  <div class="row d-flex justify-content-center py-5">
    <div class="col-md-11 col-lg-10 col-xl-8">
      <div class="card-grid-container gap-3">
        <TransitionGroup name="fade-slide"> 
        <div class="card-grid-item history-card" v-for="item in history" 
            :key="item.date + forecastStore.selectedCityOptions[0].text">
          <WeatherCard
            :condition="item.day.condition"
            :humidity="item.day.avghumidity"
            :time="item.date"
            :windSpeed="item.day.maxwind_kph"
            :temperature="item.day.avgtemp_c"
            :location="forecastStore.selectedCityOptions[0].text"
            :isLoading="forecastStore.getIsLoading"
          ></WeatherCard>
        </div>
      </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { useForecastStore } from '@/modules/forecastModule/store'
import type { IForecastDay } from '@/modules/forecastModule/store/types'

import WeatherCard from '@/components/WeatherCard.vue'

const forecastStore = useForecastStore()

const history = ref<IForecastDay[]>([])

watch(
  () => forecastStore.selectedCityOptions,
  async () => {
    history.value = await forecastStore.getWeatherHistory()
  },
  { deep: true, immediate: true }
)
</script>
<style lang="scss">
.card-grid-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr); 
}

.card-grid-item {
    grid-column: span 3
}


.card-grid-item:nth-child(n+5) {
    grid-column: span 4; 
}
</style>
