<template>
    <div class="span">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ad.
    </div>
  <div class="big">
    <p>0000.0 MS</p>
    <div class="elCenter">
      <div class="container">
        <p>{{ decompteVal }}</p>
      </div>
    </div>
    <div>5/5</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const decompteVal = ref(3);

function deCompte() {
  let myReact = setInterval(() => {
    decompteVal.value--;
    if (decompteVal.value === 0) {
      clearInterval(myReact);
    }
  }, 1000);
}
deCompte();
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
