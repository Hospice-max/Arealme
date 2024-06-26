<template>
  <div class="container1">
    <div class="firstPart">
      <div>
        <span>Your </span> <span class="elMiltxt">Average Reaction Time </span
        ><span>is:</span>
      </div>
    </div>
    <div class="result">300 <span id="maSpan">ms</span></div>
    <div class="Average">Average</div>
    <div class="etoile">
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="65px"
          viewBox="0 -960 960 960"
          width="65px"
          fill="#FFFFFF"
        >
          <path
            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
          /></svg
      ></span>
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="65px"
          viewBox="0 -960 960 960"
          width="65px"
          fill="#FFFFFF"
        >
          <path
            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
          /></svg
      ></span>
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          height="65px"
          viewBox="0 -960 960 960"
          width="65px"
          fill="#FFFFFF"
        >
          <path
            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
          /></svg
      ></span>
    </div>
  </div>
</template>

<script setup>
 
</script>

<style scoped>
* {
  color: white;
}
.container1 {
  background-color:#877500;
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

  font-size: 50px;
}
</style>