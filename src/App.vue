<script setup>
import AcceuilComponent from "@/components/AcceuilComponent.vue";
import scoreComponents from "@/components/scoreComponents.vue"
import TimerComponent from "@/components/TimerComponents.vue";

</script>

<template>
<div>
  <AcceuilComponent></AcceuilComponent>
  <router-link to="/"></router-link>
  <div> <TimerComponent></TimerComponent> </div>
  <scoreComponents/>
  <RouterView/>
</div>
</template>

<style scoped>

</style>