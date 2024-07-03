<template>
  <div class="w-full pt-4">
    <div class="w-full rounded-2xl bg-white">
      <template v-for="(data, index) in disclosureData" :key="index">
        <Disclosure  v-slot="{ open }">
          <div class="w-full h-[1px] bg-gray"></div>
          <DisclosureButton
            :id="'headlessui-disclosure-button-' + index"
            :class="['flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-deepBlue focus:outline-none focus-visible:ring my-1']">
            <span>{{ data.spanText }}</span>
            <ChevronUpIcon
              :class="['h-5 w-5 text-darkBlue', { 'rotate-180': open }]"/>
          </DisclosureButton>
          <DisclosurePanel
            :id="'headlessui-disclosure-button-' + index"
            class="w-full px-4 pb-2 pt-1 text-sm text-primary"
          >
            <URadioGroup
              color="blue"
              v-model="selectedOptions[index]"
              class="pl-2"
              :options="data.options"
            >
              <template #label="{ option }">
                <p class="text-black opacity-80">{{ option.label }}</p>
              </template>
            </URadioGroup>
          </DisclosurePanel>
        </Disclosure>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import { disclosureData } from "@/utils/constants";

// Initialize selectedOptions with default values
const selectedOptions = ref(disclosureData.map((data) => data.defaultValue));
</script>

