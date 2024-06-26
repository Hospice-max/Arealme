<template>
  <div class="big">
    <p>{{ childrenProps.green }} MS</p>
    <div class="elCenter">
      <div class="container">
        <p>{{ decompteVal }}</p>
      </div>
    </div>
    <div>{{ childrenProps.id }}/{{ childrenProps.atTaked }}</div>
    <Formulaire
      v-if="childrenProps.id === childrenProps.atTaked"
      @emmitGamerName="sendGameData"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Formulaire from "./Formulaire.vue";

const decompteVal = ref(3);
const gameSessionData = ref({
  gamerName: "",
  date: "",
});

let array = [1, 2, 3, 4, 5];

const props = defineProps({
  childrenProps: Object,
});

const emit = defineEmits(["response", "emitGameData"]);

function moy(element) {
  const moyenne = Math.floor(
    element.reduce((acc, cur) => acc + cur, 0) / element.lenght
  );
  return moyenne;
}

function deCompte() {
  let myReact = setInterval(() => {
    decompteVal.value--;
    if (decompteVal.value < 1) {
      clearInterval(myReact);
      emit("response", true);
    }
    console.log("deCompte setIntervalle");
  }, 1000);
}

onMounted(() => {
  deCompte();
});

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
  /* display: flex;
    flex-direction: column;
  justify-content: center;
  align-content: center; */
  text-align: center;
  margin: 0 auto;
}
</style>
