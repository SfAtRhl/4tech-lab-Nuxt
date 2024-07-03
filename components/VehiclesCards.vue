<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] py-4 place-items-center"
  >
    <div
      v-for="(vehicle, index) in vehicles"
      :key="index"
      class="max-w-lg lg:w-full"
    >
      <template v-if="index !== 5">
        <VehicleCard :vehicle="vehicle" @click="openModal(vehicle)" />
      </template>
      <template v-else>
        <Ads />
      </template>
    </div>



    <SavedModal
      v-show="showModal"
      @close-modal="closeModal"
      :vehicle="selectedVehicle"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import Ads from "./Card/Ads.vue";
import VehicleCard from "./Card/VehicleCard.vue";
import SavedModal from "./SavedModal.vue";

export default {
  components: { VehicleCard, Ads, SavedModal },
  props: {
    vehicles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showModal: false,
      selectedVehicle: [],
    };
  },
  methods: {
    openModal(vehicle) {
      this.selectedVehicle = vehicle;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
