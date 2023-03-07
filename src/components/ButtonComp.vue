<script setup>

const props = defineProps(["text","isValid","height","width"])

</script>

<template>
  <div class="buttoncomp">
      <button :disabled="!props.isValid">{{ text }}</button>
  </div>
</template>

<style scoped>
  button{
    @apply cursor-pointer w-[v-bind(props.width)] h-[v-bind(props.height)] h-10 w-24 bg-blue-500  hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-center;
  }
  button:disabled{  
    @apply cursor-not-allowed bg-gray-400;

  }
</style>