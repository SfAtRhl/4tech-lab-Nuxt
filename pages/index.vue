<template>
  <div
    class="relative capitalize  flex flex-row  h-screen bg-white text-deepBlue px-4 py-4 md:px-14 md:py-12  font-inter"
  >
    <!-- Section 1 -->
    <div class="h-full w-72 px-2 md:block hidden">
      <p class="text-deepBlue text-center font-bold text-md">
        FILTRER MA RECHERCHE
      </p>
      <!-- Filter Section -->
      <div class="overflow-y-auto no-scrollbar h-full">
        <div v-for="(filter, index) in filters" :key="index">
          <Filter :filter="filter" @filterChange="handleFilterChange(index)"  />
        </div>
        <div class="font-semibold text-base py-2">Budget</div>
        <Budget
          @changeMensuel="handleMensuelChange"
          @changeTotal="handleTotalChange"
          :totalChecked="isTotalChecked"
        />

        <Disclosure />
      </div>
    </div>
    <!-- Mobile Section -->

    <div
      class="h-full aboslute top-0 -left-0 bg-white px-4 z-10 w-2/5 pt-8"
      :class="{ absolute: !showNavBar, hidden: showNavBar }"
    >
      <p class="text-deepBlue text-center font-bold text-md">
        FILTRER MA RECHERCHE
      </p>
      <!-- Filter Section -->
      <div class="overflow-y-auto no-scrollbar h-5/6 pt-4">
        <div v-for="(filter, index) in filters" :key="index">
          <Filter :filter="filter" @filterChange="Filterchange(index)" />
        </div>
        <div class="font-semibold text-base py-2">Budget</div>
        <Budget
          @changeMensuel="handleMensuelChange"
          @changeTotal="handleTotalChange"
          :totalChecked="isTotalChecked"
        />
        <Disclosure />
      </div>
    </div>

    <!-- Section 2 -->
    <div class="flex flex-col w-full pt-1 text-sm">
      <div
        class="flex md:flex-row flex-col-reverse justify-between w-full items-center text-[12px] md:text-[14px]"
      >
        <p class="w-full">
          <span class="font-bold"> {{ Filtervehicles.length }} résultats </span>
          correspondant à votre recherche
        </p>
        <div class="flex flex-row space-x-2 items-center w-full justify-end">
          <p>Trier par</p>
          <DropDown
            @click="handleDropChange"
            :checked="dropChecked"
            :buttonText="dropdownButtonText"
            :menuItems="dropdownMenuItems"
          />
          <div
            @click="changeshowNavBar"
            class="md:hidden bg-primary rounded-md py-2 px-4 text-sm text-gray-700 dark:text-gray-200"
          >
            <Icon
              :name="
                !showNavBar
                  ? 'material-symbols-light:close-rounded'
                  : 'material-symbols:menu'
              "
              color="black"
              size="24px"
            />
          </div>
        </div>
      </div>
      <!-- Section 3 -->
      <div class="overflow-y-auto no-scrollbar h-screen">
        <VehiclesCards :vehicles="paginatedVehicles" />
      </div>
      <div class="flex flex-row h-12 justify-between items-center">
        <div class="font-medium">{{ currentPage }}/{{ lastPage }}</div>
        <div class="flex flex-row space-x-1 justify-end">
          <button
            @click="handlePageChange(currentPage - 1)"
            class="bg-darkBlue hover:bg-lightBlue hover:border-darkBlue border-2 text-white hover:text-darkBlue font-bold py-2 px-4 rounded-md"
          >
            prev
          </button>
          <button
            @click="handlePageChange(currentPage + 1)"
            class="bg-darkBlue hover:bg-lightBlue hover:border-darkBlue border-2 text-white hover:text-darkBlue font-bold py-2 px-4 rounded-md"
          >
            next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "4 tech lab | Test",
  meta: [{ name: "description", content: "Nuxt 3 Test" }],
});

import { ref, computed } from "vue";

// Data
const vehicles = ref([]);
const Filtervehicles = ref([]);
const filters = ref([
  { title: "Prêt à partir", selected: false },
  { title: "Zéro km", selected: false },
  { title: "Promotions", selected: false },
]);
const isTotalChecked = ref(true);
const dropdownButtonText = ref("Pertinence");
const dropChecked = ref(false);
const showNavBar = ref(true);
const lastPage = ref(0);
const currentPage = ref(1);
const itemsPerPage = ref(13);

const dropdownMenuItems = ref([
  {
    label: "Dashboard",
    link: "#",
    icon: "material-symbols:dashboard",
    click: () => {
      console.log("Dashboard");
      dropdownButtonText.value = "Dashboard";
    },
  },
  {
    label: "Settings",
    link: "#",
    icon: "material-symbols:settings",
    click: () => {
      console.log("Settings");
      dropdownButtonText.value = "Settings";
    },
  },
  {
    label: "Earnings",
    link: "#",
    icon: "carbon:machine-learning",
    click: () => {
      console.log("Earnings");
      dropdownButtonText.value = "Earnings";
    },
  },
]);

// Methods
const handleFilterChange = (index) => {
  filters.value[index].selected = !filters.value[index].selected;
};

const handleTotalChange = () => {
  isTotalChecked.value = true;
};

const handleMensuelChange = () => {
  isTotalChecked.value = false;
};

const changeshowNavBar = () => {
  showNavBar.value = !showNavBar.value;
  console.log(showNavBar.value);
};

const handleDropChange = () => {
  dropChecked.value = !dropChecked.value;
};

const handlePageChange = (newPage) => {
  if (newPage >= 1 && newPage <= lastPage.value) {
    currentPage.value = newPage;
  }
};

// Computed
const paginatedVehicles = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return Filtervehicles.value.slice(startIndex, endIndex);
});

// Lifecycle hook 
import { onMounted } from "vue";
onMounted(async () => {
  try {
    const response = await fetch("/vehicles.json");
    const data = await response.json();
    vehicles.value = data;
    Filtervehicles.value = data;
    lastPage.value = Math.ceil(
      Filtervehicles.value.length / itemsPerPage.value
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
