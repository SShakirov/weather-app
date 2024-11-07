<template>
<div class=""></div>
</template>

<script setup lang="ts">
import {computed} from 'vue';

import { useForecastStore } from '@/modules/forecastModule/store';

interface Props {
}
const forecastStore  = useForecastStore()
const props = defineProps<Props>();

console.log(await forecastStore.getWeatherForecast("Kazan"))
</script>
