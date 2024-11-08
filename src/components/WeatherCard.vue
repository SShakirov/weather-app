<template>
  <div class="row d-flex justify-content-center py-5">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card text-body rounded-5">
        <div class="card-body p-4">
          <div class="d-flex">
            <h6 class="flex-grow-1">
              <span
                v-if="props.isLoading"
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span
              ><span v-else>{{ props.location }}</span>
            </h6>

            <h6>
              <span
                v-if="props.isLoading"
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
              <span v-else>{{ props.time }}</span>
            </h6>
          </div>

          <div class="d-flex flex-column text-center mt-5 mb-4">
            <h6 class="display-4 mb-0 font-weight-bold">
              <span
                v-if="props.isLoading"
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span
              ><span v-else>{{ getTemperatureString }}</span>
            </h6>
            <span class="small text-secondary"
              ><span
                v-if="props.isLoading"
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span
              ><span v-else>{{ props.condition.text }}</span></span
            >
          </div>

          <div class="d-flex align-items-center">
            <div class="flex-grow-1" style="font-size: 1rem">
              <div>
                <FontAwesomeIcon :icon="faWind" class="fa-fw text-secondary" />
                <span class="ms-1">
                  <span
                    v-if="props.isLoading"
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                  <span v-else>{{ getWindSpeedString }}</span>
                </span>
              </div>

              <div>
                <FontAwesomeIcon :icon="faTint" class="fa-fw text-secondary" />
                <span class="ms-1">
                  <span
                    v-if="props.isLoading"
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span
                  ><span v-else>{{ getHumidityString }}</span>
                </span>
              </div>

              <!-- <div>
                <FontAwesomeIcon :icon="faSun" class="fa-fw text-secondary" />
                <span class="ms-1 "> 0.2h </span>
              </div> -->
            </div>

            <div>
              <span
                v-if="props.isLoading"
                class="spinner-border spinner-border align-middle" style='width: 64px; height:64px'
              ></span>
              <img v-else :src="props.condition.icon" width="64px" height='64px' alt="" />
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
  isLoading: boolean
}

const props = defineProps<IProps>()

const getWindSpeedString = computed(() => props.windSpeed + ' kph')

const getHumidityString = computed(() => props.humidity + ' %')

const getTemperatureString = computed(() => props.temperature + ' °C')
</script>
