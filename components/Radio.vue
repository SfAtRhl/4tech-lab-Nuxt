<template>
  <div>
    <h1>Dropdown with Radio Group</h1>

    <div class="dropdown">
      <button @click="toggleDropdown">Select Option</button>
      <div v-show="isDropdownOpen" class="dropdown-content">
        <label v-for="(option, index) in options" :key="index">
          <input
            type="radio"
            :value="option"
            v-model="selectedOption"
          />
          {{ option }}
        </label>
      </div>
    </div>

    <p>Selected Option: {{ selectedOption }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style>
/* Add your CSS styling for the dropdown here */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px;
  z-index: 1;
}

.dropdown-content label {
  display: block;
  margin-bottom: 8px;
}

.dropdown-content input {
  margin-right: 8px;
}
</style>
