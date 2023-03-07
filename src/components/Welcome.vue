<script setup>
import { useAuthStore } from '../stores/use-auth';
import UserDetails from "../components/UserDetails.vue"
import UpdateImportant from './Todos/Update-Important.vue';
import Date from './LiveTime.vue'
const authStore = useAuthStore();

</script>

<template>
  <div class="flex justify-center ">
    <div class="welcome p-5">
      <template v-if="authStore.userInfo">
        <Date class="text-4xl font-bold mb-2 gap-1"></Date>
        <h1 class=" flex justify-center text-4xl font-bold mb-2 gap-1">ยินดีต้อนรับคุณ
          <span class="username  text-purple-500">{{ authStore.userInfo.displayName }}!</span>
        </h1>
        <h1 class=" flex justify-center text-4xl font-bold mb-1 gap-1">
          <span>
            <UserDetails></UserDetails>
          </span>
        </h1>

        <UpdateImportant></UpdateImportant>
      </template>
      <template v-else>
        <h1 class="text-4xl font-bold mb-5">Welcome To My Todo Application</h1>
        <h1 class="text-4xl font-bold mb-5 text-center">Please Login First!</h1>
      </template>

    </div>
  </div>
</template>

<style lang="scss" scoped>
// h1 {
//   @apply text-2xl;
// }

// .username {
//   text-transform: capitalize
// }

// .welcome {
//   @apply flex flex-col justify-center items-center min-h-[20vh];

// }
</style>