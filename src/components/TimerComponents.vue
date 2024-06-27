<template>
  <div class="timer-container">
    <div v-show="childrenProps.id !== 1" class="chart-container">
      <ChartComponent :durations="durations" />
    </div>
    <div class="big">
      <p>{{ childrenProps.green[childrenProps.id - 1] }} MS</p>
      <div class="elCenter">
        <div
          v-if="childrenProps.id !== childrenProps.atTaked"
          class="container"
        >
          <p>{{ decompteVal }}</p>
        </div>
        <div v-else>Evaluation...</div>
      </div>
      <div>{{ childrenProps.id }}/{{ childrenProps.atTaked }}</div>
      <Formulaire v-if="isFormVisible" @emmitGamerName="sendGameData" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Formulaire from "./Formulaire.vue";
import ChartComponent from "@/components/ChartComponent.vue";

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

// durations.value.push(props.childrenProps.id);
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
  return `${
    formatNoYear(date.getDay()) +
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

<style scoped>
.timer-container {
  display: flex;
}

.container {
  text-align: center;
  border: 20px solid rgb(206, 26, 26);
  height: 200px;
  width: 200px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bold;
}

.span {
  display: flex;

  margin-right: 50rem;
}
.elCenter {
  display: flex;
  justify-content: center;
  align-content: center;
}
.big {
  text-align: center;
  margin: 0 auto;
}
</style>
