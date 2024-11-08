<template>
  <RouterView />
  <PushNotificationGroup />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import PushNotificationGroup from "@/modules/pushNotifications/components/PushNotificationGroup.vue";
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap";
@import "@vueform/multiselect/themes/default.css";
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  background-color: rgb(40 40 40);
}
</style>
