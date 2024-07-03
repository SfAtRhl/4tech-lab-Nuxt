<template>
  <div>
    <div
      class="flex flex-row px-4 py-2 justify-between text-white rounded-md my-2 text-sm font-medium"
      :class="{
        'bg-darkBlue': filter.selected,
        'bg-darkBlue opacity-65': !filter.selected,
      }"
      @click="handleToggleChange"
    >
      <p class="">{{ filter.title }}</p>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          class="relative w-11 h-6 rounded-full peer 
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            peer-checked:after:border-white after:content-[''] after:absolute
            after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300
            after:border after:rounded-full after:h-5 after:w-5 after:transition-all
            dark:border-gray-600 peer-checked:bg-white peer-checked:bg-opacity-65
            {{ filter.selected ? 'peer-checked' : '' }}"
          :class="{ 'peer-checked': filter.selected }"
        ></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleToggleChange() {
      this.$emit("filterChange");
    },
  },
};
</script>
