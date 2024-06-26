<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import scoreComponents from "@/components/scoreComponents.vue";


let time = Math.floor(Math.random() * 3000);
console.log(time);
const isRed = ref(true);
let startTime = ref(0);
let endTime = ref(0);
let badClick = ref(0);
let survey = ref(true);
let diffTime = ref(0);
let gameTab = ref([]);
let idValue = ref(1);
let childrenProps = reactive({id: '', green: ''});


function clickReact() {
  if (isRed.value === true) {
    badClick.value++;
    console.log(badClick.value);
  } else {
    endTime.value = performance.now();
    diffTime.value = (endTime.value - startTime.value).toFixed(2);
    gameTab.value.push({id: idValue.value, green: diffTime.value, red: badClick.value});
    childrenProps.id= idValue.value;
    childrenProps.green= diffTime.value;
    console.log(diffTime.value);
  }
};

const startGame = () => {
  setTimeout(() => {
    isRed.value = false;
    startTime.value = performance.now();
  }, time);
};

watch(() => survey.value, clickReact);

onMounted(() => {
  startGame();
});
</script>

<template>
  <div class="textContainer">
    <p v-if="isRed">ATTENDEZ LE VERT <span class="blink">...</span></p>
    <p v-else>MAINTENANT!</p>
    <div
      class="test_circle"
      :class="{ red: isRed, green: !isRed }"
      @click="survey = !survey"
    ></div>
  </div>
</template>

<style scoped>
.test_circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.red {
  background-color: rgb(230, 55, 55);
  border: 12px solid rgb(150, 50, 78);
  cursor: pointer;
}

.green {
  background-color: #0cf264;
  border: 12px solid rgb(35, 165, 121);
  cursor: pointer;
}

.textContainer {
  text-align: center;
}

.blink {
  animation: blink 1s infinite;
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

p {
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 25px;
}
</style>
