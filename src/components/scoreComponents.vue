<template>
  <h1>Score Component</h1>
  <div class="container1">
    <div class="firstPart">
      <div>
        <span>Your </span> <span class="elMiltxt">Average Reaction Time </span
        ><span>is:</span>
      </div>
    </div>
    <!-- Affichage de la perfomance et du temps moyen du joueur -->
    <div class="result">{{ displayScore }} <span id="maSpan">ms</span></div>
    <div class="Average">{{ displayAverage }}</div>
    <StarsComponent :stars="scoreData.stars" />
  </div>

  <h1>Chart Component</h1>
  <div class="chart-container">
    <ChartComponent />
  </div>

  <h1>Chart Component</h1>

   
  <HighscoresTableComponent />

  <div>

  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import StarsComponent from "@/components/StarsComponent.vue";

import ChartComponent from "@/components/ChartComponent.vue";
import HighscoresTableComponent from "@/components/HighscoresTableComponent.vue"

const plafond = 3000;

const categories = {
  rapide: { texte: "Rapide", limit: 1000 },
  moyen: { texte: "Moyen", limit: 2000 },
  lent: { texte: "Lent" },
};
// Stockage du temps du joueur
const scoreData = ref({
  id: 1256552,
  stars: 0,
  score: 999,
});

const displayScore = ref(plafond);
const displayAverage = ref("");
// Analyse du score du joueur en fonction des catégories de perfomance
onMounted(() => {
  if (scoreData.value.score > categories.moyen.limit) {
    displayAverage.value = categories.lent.texte;
    scoreData.value.stars = 1;
  } else if (
    scoreData.value.score > categories.rapide.limit &&
    scoreData.value.score <= categories.moyen.limit
  ) {
    displayAverage.value = categories.moyen.texte;
    scoreData.value.stars = 2;
  } else if (scoreData.value.score < categories.rapide.limit) {
    displayAverage.value = categories.rapide.texte;
    scoreData.value.stars = 3;
  }

  const intervalId = setInterval(() => {
    if (displayScore.value > scoreData.value.score) {
      displayScore.value--;
    } else {
      clearInterval(intervalId);
    }
  }, 0.5);
});
</script>

<style scoped>
* {
  color: white;
}

@keyframes changeColor {
  from {
    background-color: red;
  }
  to {
    background-color: #877500;
  }
}

.container1 {
  background-color: green;
  height: 321px;
  width: 953px;
  margin: 0 auto;
  animation-name: changeColor;
  animation-duration: 5s;
  animation-delay: 0s;
}
.firstPart {
  padding-top: 25px;

  text-align: center;
  color: white;
}
.elMiltxt {
  margin-left: 5px;
  margin: right 5px;
  font-weight: bold;
}
.result {
  height: 120px;
  font-size: 100px;
  text-align: center;
  margin-top: 10px;
  padding-top: 10px;
}
#maSpan {
  font-size: 50px;
}
.Average {
  text-align: center;

  font-size: 50px;
}

h1 {
  color: #000;
}
.chart-container {
  background-color: lightskyblue;
}
</style>