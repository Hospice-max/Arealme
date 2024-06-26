<script setup>
import { ref, onMounted } from "vue";
import GameArray from "@/components/AbilityComponents/GameArray.vue";
const showCircle = ref(true);
</script>

<template>
  <div :class="{ isMonted: showCircle }" class="container" @click="showCircle = false">
    <p id="message" v-if="showCircle">Cliquez n'importe où pour commencer</p>
    <GameArray v-else></GameArray>
  </div>
</template>

<style scoped>
template {
  background-color: aqua;
}

#message {
  animation: blink 0.5s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

p{
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgb(58, 87, 139);
}

.isMonted {
  cursor: pointer;
}

</style>
