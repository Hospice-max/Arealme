<script setup>
import ChartComponent from "@/components/ChartComponent.vue";
import { onMounted, ref } from "vue";
import Formulaire from "./Formulaire.vue";

const decompteVal = ref(3);
const gameSessionData = ref({
  gamerName: "",
  date: "",
  moy: 0,
});

const durations = ref([]);

const isChartVisible = ref(false);
const isFormVisible = ref(false);

const props = defineProps({
  childrenProps: Object,
  gameRoundsData: Array,
  currentTentative: Number,
});

durations.value = [...props.childrenProps.green.map((el) => parseFloat(el))];

const emit = defineEmits(["response", "emitGameData"]);

function moy(element) {
  const moyScores = element.reduce((acc, cur) => acc + cur, 0);
  return moyScores / element.length;
}

function deCompte() {
  let myReact = setInterval(() => {
    decompteVal.value--;
    if (decompteVal.value < 1) {
      clearInterval(myReact);
      if (props.childrenProps.id === props.childrenProps.atTaked) {
        gameSessionData.value.moy = moy(durations.value);
        isFormVisible.value = true;
      } else {
        emit("response", true);
      }
    }
  }, 1000);
}

onMounted(() => {
  deCompte();
  showChart();
});

function showChart() {
  isChartVisible.value = true;
}

function showForm() {
  isFormVisible.value = true;
}

function sendGameData(name) {
  gameSessionData.value.gamerName = name;
  gameSessionData.value.date = dateGenerator();
  emit("emitGameData", gameSessionData.value);
}

function dateGenerator() {
  let date = new Date();
  const formatNoYear = (t) => {
    if (t < 10) return `0${t}`;
    return t;
  };
  return `${formatNoYear(date.getDate()) +
    "-" +
    formatNoYear(date.getMonth()) +
    "-" +
    date.getFullYear() +
    " " +
    formatNoYear(date.getHours()) +
    "h " +
    formatNoYear(date.getMinutes()) +
    "min " +
    formatNoYear(date.getSeconds()) +
    "s"
    }`;
}
</script>


<template>
  <div class="flex flex-col items-center justify-center space-y-6">
    <p class="text-6xl font-bold text-white">
      {{ childrenProps.green[childrenProps.id - 1] }} MS
    </p>

    <div class="flex items-center space-x-6 text-white">
      <div v-show="childrenProps.id !== 1" class="chart-container">
        <ChartComponent :durations="durations" />
      </div>
      <div v-if="childrenProps.id !== childrenProps.atTaked"
        class="w-64 h-64 border-8 border-gray-200 rounded-full flex items-center justify-center text-6xl font-bold">
        <p>{{ decompteVal }}</p>
      </div>
      <div v-else class="text-center text-4xl font-bold text-white">
        EVALUATION...
      </div>
    </div>

    <Formulaire v-if="isFormVisible" @emmitGamerName="sendGameData" />

    <div class="text-3xl text-white py-6">
      {{ childrenProps.id }}/{{ childrenProps.atTaked }}
    </div>
  </div>
</template>


<style scoped>
.chart-container {
  width: 100%;
  max-width: 800px;
  /* Ajuste la largeur maximale du graphique */
  height: 500px;
  /* Ajuste la hauteur du graphique */
  border-radius: 8px;
  /* Coins arrondis */
  padding: 1rem;
  /* Espacement intérieur */
  background-color: transparent;
  /* Fond transparent pour le conteneur du graphique */
}
</style>
