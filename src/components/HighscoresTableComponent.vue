<script setup>
import { ref } from "vue";
const data = ref([
    {Rank:"0",
    Name:"GFB",
    Reaction:"GH",
    Date:"GH",
    }
    ]);
</script>


<template>
  <div>
    
    <h2>Reaction Time Test Highscores</h2>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Reaction Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      </tbody>
    </table>
  </div>
<RouterView></RouterView>
</template>

<style scoped>
table, tr, td, th {
    border: 1px solid black  ;
    border-collapse:collapse ;
    height: 2rem;
    width: 2rem;
}
</style>