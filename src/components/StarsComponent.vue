<script setup>
import FilledStarIcone from "@/components/icones/FilledStarIcone.vue";
import EmptyStarIcone from "@/components/icones/EmptyStarIcone.vue";

const props = defineProps({
  stars: Number,
});
</script>

<template>
  <div class="flex justify-center space-x-1">
    <template v-for="i in 3" :key="i">
      <component :is="i <= props.stars ? FilledStarIcone : EmptyStarIcone" class="w-8 h-8 text-yellow-400" />
    </template>
  </div>
</template>