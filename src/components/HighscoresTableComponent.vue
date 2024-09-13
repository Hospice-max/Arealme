<script setup>
const props = defineProps({
  data: Array,
});
</script>

<template>
  <div class="p-4 rounded-lg bg-[#4a6a91] shadow-lg">
    <h2 class="text-2xl font-bold text-white mb-4">Reaction Time Test Highscores</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white text-gray-800 rounded-lg overflow-hidden shadow-md">
        <thead class="bg-[#2d3a5b] text-white">
          <tr>
            <th class="py-3 px-6 text-left">Rank</th>
            <th class="py-3 px-6 text-left">Name</th>
            <th class="py-3 px-6 text-left">Reaction Time</th>
            <th class="py-3 px-6 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(el, i) in data" :key="i" class="border-b border-[#c4d1e0]">
            <td class="py-3 px-6">{{ i + 1 }}</td>
            <td class="py-3 px-6">{{ el.gamerName }}</td>
            <td class="py-3 px-6">{{ el.moy }} ms</td>
            <td class="py-3 px-6">{{ el.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
