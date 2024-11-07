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

forecastStore.getTodayWeatherForecast({lat:"55.796289", lon: "49.108795"})
</script>
