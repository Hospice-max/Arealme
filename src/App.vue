<script setup>
import AcceuilComponent from "@/components/AcceuilComponent.vue";
import scoreComponents from "@/components/scoreComponents.vue"
import TimerComponent from "@/components/TimerComponents.vue";
import FormulaireVue from "./components/Formulaire.vue";

</script>

<template>
<div>
  <RouterView/>
</div>

<scoreComponents/>
</template>

<style scoped>

</style>