<template>
    <div class="text-center">
        <h2 class="text-lg font-bold text-red-500 mb-4">Current Date</h2>
        <div class="bg-gray-100 py-2 px-4 rounded-md inline-block">
            <span class="text-gray-800 font-bold text-xl" >{{ currentDate }}</span>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { format } from 'date-fns'

const currentDate = ref(format(new Date(), 'MMMM dd yyy, EEEE HH:mm:ss'))

setInterval(() => {
    currentDate.value = format(new Date(), 'MMMM dd yyy, EEEE HH:mm:ss')
}, 1000)
</script>