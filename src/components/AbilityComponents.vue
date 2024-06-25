<script setup>
import { ref} from 'vue';

const showCircle = ref (true);

</script>

<template>
    <div class="container" @click="showCircle = false">
        <p id="message" v-if="showCircle">Tap anywhere to start </p>
        <div class="test_circle" v-else>
            <p id="count">1</p>
        </div>
    </div>
</template>

<style scoped>

template{
  background-color: aqua;
}

#message {
  animation: blink 0.5s infinite;
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

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.test_circle{
    width: 300px;
    height: 300px;
    background-color: red;
    border-radius: 50%;
    border: 1px solid red;
}
</style>