<script setup>
import AcceuilComponent from "@/views/AcceuilPage.vue";
import scoreComponents from "@/components/scoreComponents.vue"
</script>

<template>
<div>
   <router-link to="/"></router-link>
  <RouterView/>
</div>
<scoreComponents/>
</template>

<style scoped>

</style>