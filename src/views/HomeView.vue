<template>
  <div class="main-page vw-100 vh-100 m-vh-100 d-flex flex-column p-1 bg-dark">
    <div class="w-100 d-flex justify-content-between p-3 bg-transparent">

      <div
      class="d-flex gap-3 align-items-center">



      </div>

      <div class="d-flex gap-5">

        <ButtonStyled
            class="text-decoration-none"
            text="Главная"
            type="label"
            subtype="label-black"
            href="/tasks"
          />

        <ButtonStyled
          class="text-decoration-none"
          text="Выход"
          type="main"
          subtype="main-second"
        />
      </div>
    </div>
    <div class="flex-grow-1 w-100 content-block bg-transparent">
      <RouterView> </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import {useRoute, useRouter} from 'vue-router';

import ButtonStyled from '@/UI/components_styled/ButtonStyled.vue';
import LabelStyled from '@/UI/components_styled/LabelStyled.vue';

const router = useRouter();
const route = useRoute();
</script>
<style lang='scss' scoped>

.content-block{
  height: 85vh;
}
</style>
