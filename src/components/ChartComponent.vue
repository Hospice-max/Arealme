<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  durations: Array,
});

const ids = ref([]);

const graph = ref(null);

onMounted(() => {
  if (graph.value) {
    const ctx = graph.value.getContext("2d");

    const dataCanvas = {
      labels: props.durations.map((_, index) => index + 1),
      datasets: [
        {
          label: "Progression du test en cours",
          data: props.durations,
          fill: false,
          borderColor: "#4A90E2",
          pointBorderColor: "#7CFC00",
          backgroundColor: "rgba(72, 162, 255, 0.2)",
          tension: 0.1,
        },
      ],
    };

    const miseEnForme = {
      scales: {
        x: {
          ticks: {
            color: "#E5E7EB",
          },
          grid: {
            color: "#374151", // Couleur de la grille de l'axe x
          },
        },
        y: {
          ticks: {
            color: "#E5E7EB",
          },
          grid: {
            color: "#374151", // Couleur de la grille de l'axe y
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#E5E7EB",
          },
        },
      },
    };

    new Chart(ctx, {
      type: "line",
      data: dataCanvas,
      options: miseEnForme,
    });
  }
});
</script>

<template>
  <div>
    <div class="chart-wrapper">
      <canvas ref="graph" class="w-full h-80"></canvas>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #1F2937;
  /* Couleur de fond sombre */
  border-radius: 8px;
  /* Coins arrondis pour un effet moderne */
  padding: 2rem;
  /* Espacement intérieur */
}

.chart-wrapper {
  background-color: #2D3748;
  /* Couleur de fond pour le conteneur du graphique */
  border-radius: 8px;
  /* Coins arrondis */
  padding: 1rem;
  /* Espacement intérieur */
}
</style>
