<script setup>
import { useAuthStore } from '../stores/use-auth';


const authStore = useAuthStore();



</script>

<template>
  <template v-if="authStore.userInfo">
    <h1 class=" flex justify-center text-4xl font-bold mb-1 gap-1">คุณใช้อีเมล์
          <span class="username  text-purple-500">{{ authStore.userInfo.email }}!</span>
        </h1>
        
  </template>
</template>

<style lang="scss" scoped>

</style>