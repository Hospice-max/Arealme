<script setup>
import { ref, onMounted } from "vue";
import StarsComponent from "@/components/StarsComponent.vue";
import HighscoresTableComponent from "@/components/HighscoresTableComponent.vue";

const props = defineProps({
  data: Object,
  tableDatas: Array,
});

const categories = {
  rapide: { texte: "Rapide", limit: 1000 },
  moyen: { texte: "Moyen", limit: 2000 },
  lent: { texte: "Lent" },
};

// Stockage du temps du joueur
const scoreData = ref({
  stars: 3,
  score: props.data.green
    .map((el) => parseFloat(el))
    .reduce((acc, curr) => acc + curr, 0),
});

const moyenne = Math.round((scoreData.value.score / props.data.green.length));
const plafond = moyenne + 1000;
const displayScore = ref(plafond);
const displayAverage = ref("");

// Analyse du score du joueur en fonction des catégories de performance
onMounted(() => {
  if (moyenne > categories.moyen.limit) {
    displayAverage.value = categories.lent.texte;
    scoreData.value.stars = 1;
  } else if (
    moyenne > categories.rapide.limit &&
    moyenne <= categories.moyen.limit
  ) {
    displayAverage.value = categories.moyen.texte;
    scoreData.value.stars = 2;
  } else if (moyenne < categories.rapide.limit) {
    displayAverage.value = categories.rapide.texte;
    scoreData.value.stars = 3;
  }

  const intervalId = setInterval(() => {
    if (displayScore.value > moyenne) {
      displayScore.value--;
    } else {
      clearInterval(intervalId);
    }
  }, 0.5);
});

function restartGame() {
  // Fonction pour redémarrer le jeu ou la page
  window.location.reload();
}
</script>

<template>
  <div
    class="container1 bg-[#4a6a91] h-80 w-[953px] mx-auto flex flex-col items-center justify-center text-white rounded-lg shadow-lg">
    <div class="firstPart text-center pt-6">
      <div class="text-xl">
        <span>Your </span>
        <span class="font-bold text-2xl">Average Reaction Time </span>
        <span>is:</span>
      </div>
    </div>

    <!-- Affichage de la performance et du temps moyen du joueur -->
    <div class="result text-7xl mt-4">
      {{ displayScore }} <span class="text-4xl">ms</span>
    </div>
    <div class="Average text-4xl mt-4">
      {{ displayAverage }}
    </div>

    <StarsComponent :stars="scoreData.stars" />
  </div>

  <div class="btn-container text-center mt-6">
    <button @click="restartGame"
      class="px-6 py-2 bg-[#ff7414] text-white font-semibold rounded-lg hover:bg-[#e65b10] transition">Recommencer</button>

  </div>

  <div class="table-area mt-6">
    <HighscoresTableComponent :data="tableDatas" />
  </div>
</template>


<style scoped>
.container1 {
  border-radius: 16px;
  /* Coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Ombre légère */
}

.btn-container button {
  border-radius: 12px;
  /* Coins arrondis pour le bouton */
}
</style>
