<template>
  <div class="row d-flex justify-content-center py-5">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card text-body" style="border-radius: 35px">
        <div class="card-body p-4">
          <div class="d-flex">
            <h6 class="flex-grow-1">{{ props.location }}</h6>

            <h6>{{ props.time}}</h6>
          </div>

          <div class="d-flex flex-column text-center mt-5 mb-4">
            <h6 class="display-4 mb-0 font-weight-bold">{{ getTemperatureString }}</h6>
            <span class="small" style="color: #868b94">{{ props.condition.text }}</span>
          </div>

          <div class="d-flex align-items-center">
            <div class="flex-grow-1" style="font-size: 1rem">
              <div>
                <FontAwesomeIcon :icon="faWind" class="fa-fw" style="color: #868b94" />
                <span class="ms-1"> {{ getWindSpeedString }} </span>
              </div>

              <div>
                <FontAwesomeIcon :icon="faTint" class="fa-fw" style="color: #868b94" />
                <span class="ms-1"> {{ getHumidityString }} </span>
              </div>

              <!-- <div>
                <FontAwesomeIcon :icon="faSun" class="fa-fw" style="color: #868b94" />
                <span class="ms-1"> 0.2h </span>
              </div> -->
            </div>

            <div>
              <img :src="props.condition.icon" width="100px" alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
import { faTint } from '@fortawesome/free-solid-svg-icons/faTint'
import { faWind } from '@fortawesome/free-solid-svg-icons/faWind'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

import type { IForecastCondition } from '@/modules/forecastModule/store/types'

interface IProps {
  humidity: number
  windSpeed: number
  condition: IForecastCondition
  temperature: number
  time: string
  location: string
}

const props = defineProps<IProps>()


const getWindSpeedString = computed(() => props.windSpeed + " kph")

const getHumidityString = computed(() => props.humidity + " %")

const getTemperatureString = computed(() => props.temperature + " °C")
</script>
