<script setup>
import { ref, onMounted, watch } from "vue";
let time = Math.floor(Math.random() * 2500);
console.log(time);
const isRed = ref(true);
let count = 0;
let intervalId = setInterval(() => {
  // count.value++;
}, 1);

const startGame = () => {
  setTimeout(() => {
    isRed.value = false;
  }, time);
  setInterval(() => {}, 1);
};

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
      @click="intervalId"
    >
      <!-- <p id="count">1</p> -->
    </div>
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
