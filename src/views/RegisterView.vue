<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { useRegexpStore } from '../stores/use-regexp';
import ButtonComp from '../components/ButtonComp.vue';

const username = ref("");
const email = ref("");
const password = ref("");
const error = ref();

const regexpStore = useRegexpStore();
const router = useRouter();
const auth = getAuth();

const signupHandler = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(async (res) => {
      await updateProfile(auth.currentUser, {
        displayName: username.value
      })
      alert("successfully registered");
      router.push("/")
    })
    .catch((err) => error.value = err)
};

const goToLogin = () => {
  router.push("/login");
};

const isValidUsername = computed(() => {
  return regexpStore.checkUsername(username.value);
});

const isValidEmail = computed(() => {
  return regexpStore.checkEmail(email.value);
});

const isValidPassword = computed(() => {
  return regexpStore.checkPassword(password.value);
});

</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1 class="text-center text-3xl font-extrabold text-gray-900">Create an Account</h1>
    </div>  

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit="signupHandler">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 font-bold mb-2">Username</label>
            <input type="text" v-model="username" class="form-input rounded-md shadow-sm mt-1 block w-full" id="username"
              placeholder="example">
            <template v-if="!isValidUsername && username.length > 0">
              <div class="text-red-500 mt-2 text-sm">
                Min 3 characters
              </div>
            </template>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" v-model="email" class="form-input rounded-md shadow-sm mt-1 block w-full" id="email"
              placeholder="example@example.com">
            <template v-if="!isValidEmail && email.length > 0">
              <div class="text-red-500 mt-2 text-sm">
                Please enter a valid email
              </div>
            </template>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" v-model="password" class="form-input rounded-md shadow-sm mt-1 block w-full"
              id="password" placeholder="*********">
            <template v-if="!isValidPassword && password.length > 0">
              <div class="text-red-500 mt-2 text-sm">
                Min 6 characters
              </div>
            </template>
          </div>

          <div class="text-center">
            <ButtonComp :isValid="isValidEmail && isValidPassword && isValidUsername" text="Register" width="120px"
              height="40px"></ButtonComp>
          </div>

          <template v-if="error">
            <div class="text-red-500 mt-2 text-sm">
              {{ error }}
            </div>
          </template>

          <p class="mt-3 text-center text-xl text-gray-700">Do you have an account? <a @click="goToLogin"
              class="text-blue-500 hover:text-blue-700">Login</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>