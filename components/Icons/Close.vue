<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="class"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m8.401 16.333l-.734-.727l3.6-3.606l-3.6-3.58l.734-.728l3.6 3.596l3.573-3.596l.734.727l-3.6 3.58l3.6 3.607l-.734.727L12 12.737z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "MaterialSymbolsLightCloseSmall",
  props: {
    width: {
      type: String,
      default: "1em",
    },
    height: {
      type: String,
      default: "1em",
      },
     class: {
      type: String,
      default: "text-white",
    },
  },
};
</script>
