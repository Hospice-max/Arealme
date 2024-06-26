<script setup>
import AcceuilComponent from "@/components/AcceuilComponent.vue";
import scoreComponents from "@/components/scoreComponents.vue"
import TimerComponent from "@/components/TimerComponents.vue";
import FormulaireVue from "./components/Formulaire.vue";

</script>

<template>
<div>
  <AcceuilComponent></AcceuilComponent>
  <router-link to="/"></router-link>
  <div> <TimerComponent></TimerComponent> </div>
  <FormulaireVue></FormulaireVue>
   <router-link to="/"></router-link>
  <RouterView/>
</div>
<scoreComponents/>
</template>

<style scoped>

</style>