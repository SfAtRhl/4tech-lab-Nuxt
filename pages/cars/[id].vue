<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <h1 class="text-xl font-semibold">
    car
    <span class="text-red-500 uppercase">
      {{ id }}
    </span>
  </h1>
</template>
