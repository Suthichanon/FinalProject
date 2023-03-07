<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import ButtonComp from '../components/ButtonComp.vue';
import { useAuthStore } from '../stores/use-auth';
import { useRegexpStore } from '../stores/use-regexp';

const emits = defineEmits(["login"]);

const email = ref("");
const password = ref("");
const errMsg = ref();

const authStore = useAuthStore();
const regexpStore = useRegexpStore();
const router = useRouter();

const loginHandler = async (e) => {
  e.preventDefault();
  await authStore.loginHandler(email.value, password.value);
  if (!authStore.isLoggedIn) return errMsg.value = authStore.errMsg;
  emits("login");
  router.push("/");
};

const goToRegister = () => {
  router.push("/register");
};

const goToReset = () => {
  router.push("/reset");
};

const isValidEmail = computed(() => {
  return regexpStore.checkEmail(email.value);
});

const isValidPassword = computed(() => {
  return regexpStore.checkPassword(password.value);
});

</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col justify-center items-center">
    <div class="w-full max-w-md p-4">
      <div class="flex flex-col items-center mb-4">
        <h1 class="text-3xl font-bold mb-4">Login to Your Account</h1>
      </div>
      <form @submit.prevent="loginHandler" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="Email">
          <template v-if="!isValidEmail && email.length > 0">
            <div class="text-red-500 text-xs italic mt-1">
              Please enter a valid email.
            </div>
          </template>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="********">
          <template v-if="!isValidPassword && password.length > 0">
            <div class="text-red-500 text-xs italic mt-1">
              Password must be at least 6 characters long.
            </div>
          </template>
        </div>
        <div class="text-center">
          <ButtonComp :is-valid="isValidEmail && isValidPassword" text="Login" width="120px" height="40px"
            class="bg-transparent hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          </ButtonComp>
        </div>
        <template v-if="errMsg">
          <p class="text-red-500 text-xs italic mt-2">{{ errMsg }}</p>
        </template>
      </form>
      <div class="text-center">
        <p class="text-gray-700 text-xl mb-2">
          Don't have an account? <a href="#" @click="goToRegister" class="text-blue-500 hover:text-blue-700">Sign up</a>.
        </p>
        <p class="text-gray-700 text-xl mb-2">
          Forgot your password? <a href="#" @click="goToReset" class="text-blue-500 hover:text-blue-700">Reset it</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>