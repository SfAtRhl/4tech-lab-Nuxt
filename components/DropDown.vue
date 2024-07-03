<!-- components/DropdownButton.vue -->

<template>
  <div>
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="w-36 mb-1 text-darkBlue bg-zinc-100 font-medium rounded-lg text-sm px-5 py-2 flex flex-row items-center relative"
      type="button"
    >
      {{ buttonText }}
      <svg
        class="w-2.5 h-2.5 ms-3 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      id="dropdown"
      :class="{
        absolute: checked,
        hidden: !checked,
        ' z-10 bg-white divide-y divide-gray-100 rounded-lg shadow ': true,
      }"
    >
      <ul
        class="py-2 text-[10px] md:text-sm text-gray-700 "
        aria-labelledby="dropdownDefaultButton"
      >
        <li v-for="(item, index) in menuItems" :key="index">
          <div
            :href="item.link"
            @click="item.click"
            class="block px-4 py-1 hover:bg-gray-100 hover:text-darkBlue"
          >
            <Icon :name="item.icon" color="black" />

            {{ item.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Dropdown button",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
