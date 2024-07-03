<template>
  <div>
    <div
      class="border border-darkBlue cursor-pointer rounded-lg font-bold flex flex-row text-white justify-around text-sm"
    >
      <div
        class="w-1/2 py-2 rounded-l-lg text-center"
        :class="{
          'bg-darkBlue text-white': totalChecked,
          'bg-lightBlue text-darkBlue': !totalChecked,
        }"
        @click="toggleCheckedTotal"
      >
        Total
      </div>
      <div
        class="w-1/2 py-2 rounded-r-lg text-center"
        :class="{
          'bg-darkBlue text-white': !totalChecked,
          'bg-lightBlue text-darkBlue': totalChecked,
        }"
        @click="toggleCheckedMensuel"
      >
        Mensuel
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totalChecked: {
      type: Boolean,
    },
  },
  methods: {
    toggleCheckedMensuel() {
      this.$emit("changeMensuel", this.totalChecked);
    },
    toggleCheckedTotal() {
      this.$emit("changeTotal", this.totalChecked);
    },
  },
};
</script>
