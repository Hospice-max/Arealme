<script setup>
import GameArray from "@/components/AbilityComponents/GameArray.vue";
import { ref } from "vue";

// Valeur par défaut pour countAttmpts
const defaultCountAttempts = 3;

// Remplacez cette valeur selon vos besoins ou obtenez-la autrement
const countAttempts = ref(defaultCountAttempts);

const showCircle = ref(true);

function handleStart() {
  showCircle.value = false;
}
</script>

<template>
  <!-- Page de lancement du jeu -->
  <div :class="{ 'cursor-pointer': showCircle }"
       class="flex items-center justify-center min-h-screen w-screen bg-[#3a577f]"
       @click="handleStart">
    <p v-if="showCircle" class="text-white text-3xl font-bold animate-blink">
      Appuyez n'importe où pour commencer
    </p>
    <GameArray :countAttmpts="countAttempts" v-else />
  </div>
</template>

<style scoped>
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-blink {
  animation: blink 0.5s infinite;
}
</style>
