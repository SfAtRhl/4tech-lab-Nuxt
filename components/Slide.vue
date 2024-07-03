<template>
  <carousel :items-to-show="1.5">
    <slide v-for="img in imgs" :key="img">
      <img class="pt-2 rounded-xl h-3/4 w-2/3 object-cover" :src="img" alt="" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    },
  mounted() {
    console.log("Images:", this.imgs);
  },
};
</script>
