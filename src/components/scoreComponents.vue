<template>
  <div class="container1">
    <div class="firstPart">
      <div>
        <span>Your </span> <span class="elMiltxt">Average Reaction Time </span
        ><span>is:</span>
      </div>
    </div>
    <div class="result">310 <span id="maSpan">ms</span></div>
    <div class="Average">Average</div>
    <div class="etoile">
      <etoiles />
    </div>
  </div>
</template>

<script setup>
import etoiles from "@/components/etoiles.vue";
</script>

<style scoped>
* {
  color: white;
}
.container1 {
  background-color: #877500;
  height: 321px;
  width: 953px;
  margin: 0 auto;
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
.etoile {
  text-align: center;
  
}
</style>