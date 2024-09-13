<script setup>
import { ref } from "vue";

const inputValue = ref("");
const emit = defineEmits(["emmitGamerName"]);

// Fonction de récupération du nom du joueur
function handleSubmit() {
  if (inputValue.value.trim()) {
    emit("emmitGamerName", inputValue.value);
  }
}

function cancel() {
  inputValue.value = "";
}
</script>

<template>
  <div class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
      <p class="text-lg font-medium mb-6 text-gray-800">
        Bravo! Vous êtes classé n°2 ! S'il vous plaît entrez votre nom:
      </p>
      <form @submit.prevent="handleSubmit">
        <input 
          type="text" 
          v-model="inputValue" 
          class="w-full p-3 border border-gray-300 rounded-md mb-6"
          placeholder="Entrez votre nom"
        />
        <div class="flex justify-center gap-4">
          <button 
            type="submit" 
            class="bg-[#3a577f] text-white py-2 px-6 rounded-lg hover:bg-[#2b3e5d] focus:outline-none focus:ring-2 focus:ring-[#3a577f] focus:ring-opacity-50"
          >
            D'ACCORD
          </button>
          <button 
            type="button" 
            @click="cancel" 
            class="bg-white text-[#3a577f] py-2 px-6 border border-[#3a577f] rounded-lg hover:bg-[#f0f4f8] focus:outline-none focus:ring-2 focus:ring-[#3a577f] focus:ring-opacity-50"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
