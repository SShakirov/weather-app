<template>
  <div class="main-page vw-100 vh-100 m-vh-100 d-flex flex-column p-1 bg-dark">
    <div class="w-100 d-flex justify-content-between p-3 bg-transparent header">
      <div class=""></div>

      <div class="d-flex gap-3 align-items-center justify-content-start">
        <h5 class="text-white text-nowrap">Show weather in:</h5>

        <SelectComponent
          v-model="forecastStore.selectedCityOptions"
          :optionsList="getCitiesOptions"
          class="header__select"
        />
      </div>

      <div class="d-flex gap-5 align-items-baseline">
        <ButtonStyled
          class="text-decoration-none"
          text="Current forecast"
          type="label"
          subtype="label-black"
          href="/"
        />

        <ButtonStyled
          class="text-decoration-none"
          text="History"
          type="label"
          subtype="label-black"
          href="/history"
        />
      </div>
    </div>

    <div class="flex-grow-1 w-100 content-block bg-transparent">
      <RouterView> </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { uniqueId } from 'lodash'
import { computed, ref } from 'vue'

import { useForecastStore } from '@/modules/forecastModule/store'

import SelectComponent, { type ISelectOptionItem } from '@/UI/components/SelectComponent.vue'
import ButtonStyled from '@/UI/components_styled/ButtonStyled.vue'


const forecastStore = useForecastStore()


const getCitiesOptions = computed<ISelectOptionItem<string>[]>(() => [
  {
    id: uniqueId(),
    text: 'Kazan',
    data: 'Kazan'
  },
  {
    id: uniqueId(),
    text: 'Moscow',
    data: 'Moscow'
  },
  {
    id: uniqueId(),
    text: 'London',
    data: 'London'
  },
  {
    id: uniqueId(),
    text: 'Tokyo',
    data: 'Tokyo'
  },
  {
    id: uniqueId(),
    text: 'Shanghai',
    data: 'Shanghai'
  }
])
</script>
<style lang="scss" scoped>
.content-block {
  height: 85vh;
}
.header {
  &__select {
    width: 200px;
  }
}
</style>
