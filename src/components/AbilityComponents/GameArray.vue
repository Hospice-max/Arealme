<script setup>
import { ref, onMounted } from "vue";
let time = Math.floor(Math.random() * 2500);
console.log(time);
const isRed = ref(true);

const startGame = () => {
  setTimeout(() => {
    isRed.value = false;
  }, time);
};

onMounted(() => {
  startGame();
});
</script>

<template>
  <div class="textContainer">
    <p v-if="isRed">ATTENDEZ LE VERT <span>...</span> </p>
    <p v-else>MAINTENANT!</p>
  <div class="test_circle" :class="{ red: isRed, green: !isRed }">
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
  background-color: red;
  border: 1px solid red;
}

.green {
  background-color: green;
  border: 1px solid green;
}

.textContainer{
  text-align: center;
}
</style>
