<template>
  <div
    class="max-w-lg xl:w-full border border-gray rounded-lg shadow  bg-sky-50/80  h-96 text-sm"
  >
    <a href="#" class="bg-white h-1/2">
      <img
        class="rounded-t-lg h-1/2 w-full object-cover image"
        :src="vehicle.photos[currentImageIndex]"
        alt=""
        @mouseover="startSlideshow"
        @mouseout="stopSlideshow"
      />
    </a>
    <div class="px-4 py-5 text-deepBlue font-bold">
      <div class="flex flex-row justify-between items-center">
        <p class="text-primary font-semibold">{{ vehicle.brand }}</p>
        <p class="text-lg">{{ vehicle.gross_price }}€</p>
      </div>
      <div class="flex flex-row justify-between">
        <p class="text-xl">{{ vehicle.model }}</p>
        <div class="flex flex-row items-center gap-[5px]">
          <p class="line-through text-xs">{{ vehicle.official_price }} €</p>
          <p class="bg-accent text-xs py-[2px] px-[1px]">
            -{{
              100 -
              ((vehicle.gross_price * 100) / vehicle.official_price).toFixed(0)
            }}%
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-around pt-4">
        <div class="flex flex-col w-1/2">
          <p class="font-medium text-[14px]">{{ vehicle.designation }}</p>
          <p class="font-normal text-[12px]">
            {{ vehicle.year }} - {{ vehicle.fuel_type }} -{{
              vehicle.power_in_hp
            }}
            ch
          </p>
        </div>
        <div
          class="flex flex-col items-end justify-end opacity-60 text-[11px] leading-3 w-1/2"
        >
          <p class="font-semibold">Ou à partir de</p>
          <p class="text-lg">{{ vehicle.monthly_price }} €</p>
          <p class="font-semibold">/mois</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { vehicle } = defineProps(["vehicle"]);
</script>
<script>
export default {
  data() {
    return {
      slideshowInterval: null,
      currentImageIndex: 1,
    };
  },
  methods: {
    startSlideshow() {
      this.slideshowInterval = setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.vehicle.photos.length;
      }, 1000);
    },
    stopSlideshow() {
      clearInterval(this.slideshowInterval);
    },
  },
};
</script>

<style scoped>
.image {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.image:hover {
  opacity: 0.9;
}
</style>
