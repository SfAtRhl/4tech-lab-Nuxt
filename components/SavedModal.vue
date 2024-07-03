<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 left-0 right-0 flex justify-center"
  >
    <div class="relative h-full w-full">
      <div
        class="xl:w-2/4 w-2/3 h-1/2 lg:h-3/4 border-2 border-darkBlue bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center rounded-lg"
      >
        <div
          class="absolute -right-2 -top-2 bg-darkBlue h-6 w-6 rounded-full text-center cursor-pointer"
          @click="$emit('close-modal')"
        >
          <IconsClose width="24px" height="24px" />
        </div>

        <div class="pt-2 h-2/3 w-3/4 object-cover relative">
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between w-full z-10"
          >
            <div
              class="bg-darkBlue w-10 h-10 rounded-full flex items-center justify-center"
              @click="prevSlide"
            >
              <IconsArrowLeft />
            </div>
            <div
              class="bg-darkBlue h-10 w-10 rounded-full flex items-center justify-center"
              @click="nextSlide"
            >
              <IconsArrowRight />
            </div>
          </div>
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :loop="true"
            :speed="500"
            :pagination="{ clickable: true }"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(img, index) in vehicle.photos" :key="index">
              <img
                class="h-64 lg:h-96 w-full object-cover rounded-xl"
                :src="img"
                :alt="index"
              />
            </swiper-slide>
          </swiper>
        </div>

        <div
          class="px-8 md:px-20 text-deepBlue font-bold w-full text-md lg:text-xl"
        >
          <div class="flex flex-row justify-between items-center">
            <p class="text-primary font-semibold">{{ vehicle.brand }}</p>
            <p class="text-xl">{{ vehicle.gross_price }}€</p>
          </div>
          <div class="flex flex-row justify-between">
            <p class="">{{ vehicle.model }}</p>
            <div class="flex flex-row items-center gap-[5px]">
              <p class="line-through text-xs">{{ vehicle.official_price }} €</p>
              <p class="bg-accent text-xs lg:text-lg py-[2px] px-[1px]">
                -{{
                  (
                    (vehicle.gross_price * 100) /
                    vehicle.official_price
                  ).toFixed(0)
                }}%
              </p>
            </div>
          </div>
          <div class="flex flex-row justify-around pt-4">
            <div class="flex flex-col w-1/2">
              <p class="font-medium text-[13px] lg:text-lg">
                {{ vehicle.designation }}
              </p>
              <p class="font-normal text-[12px] lg:text-lg">
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
    </div>
  </div>
</template>

<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  props: {
    vehicle: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperInstance: null,
    };
  },

  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    onSlideChange() {},
    nextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    prevSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
  },
  mounted() {
  },
};
</script>

<style scoped></style>
