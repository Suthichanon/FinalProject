<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from "../stores/use-auth"
import AlertModal from './AlertModal.vue';
import ButtonComp from './ButtonComp.vue';

const router = useRouter();
const authStore = useAuthStore();

const alertModalText = ref("");
const alertModalOpen = ref(false);
const sideBarOpen = ref(false);

const signOutHandler = () => {
  authStore.userSignOut();
  alertModalText.value = "Successfully logged out";
  alertModalOpen.value = true;
  router.push("/login");
};

const openSideBar = () => {
  sideBarOpen.value = true;
};

const hideSidebar = () => {
  sideBarOpen.value = false;
};

const closeAlertModal = () => {
  alertModalOpen.value = false;
};

</script>

<template>
  <Teleport to="#app">
    <template v-if="alertModalOpen">
      <AlertModal @close="closeAlertModal" :text="alertModalText"></AlertModal>
    </template>
  </Teleport>
  <nav class="navbar flex items-center justify-between flex-wrap bg-pink-500 py-2 px-3 ">
    <div class="flex items-center justify-center flex-shrink-0 text-white cursor-pointer lg:items-center mx-auto"
      @click="router.push('/')">
      <img class="w-10 h-10" src="/photos/todo.png" alt="Todo logo">
      <span class="font-semibold text-lg md:text-xl tracking-tight text-white ml-2">To do App</span>
    </div>

    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:ml-auto lg:mr-0">
      <div class="text-sm lg:flex-grow  shadow-md rounded  flex-wrap  justify-center">
        <RouterLink
          class="block py-2 px-4  lg:inline-block lg:py-0 lg:px-6 text-center text-gray-900 hover:text-purple-500 hover:bg-pink-300 rounded "
          to="/">
          Home
        </RouterLink>
        <template v-if="authStore.isLoggedIn">
          <RouterLink
            class="block py-2 px-4 lg:inline-block lg:py-0 lg:px-6 text-center text-gray-900 hover:text-purple-500 hover:bg-pink-300 rounded"
            to="/planned">
            Planned
          </RouterLink>
          <RouterLink
            class="block py-2 px-4 lg:inline-block lg:py-0 lg:px-6 text-center text-gray-900 hover:text-purple-500 hover:bg-pink-300 rounded"
            to="/important">
            Important
          </RouterLink>
          <RouterLink
            class="block py-2 px-4 lg:inline-block lg:py-0 lg:px-6 text-center text-gray-900 hover:text-purple-500 hover:bg-pink-300 rounded"
            to="/daily">
            Daily
          </RouterLink>
          <RouterLink
            class="block py-2 px-4 lg:inline-block lg:py-0 lg:px-6 text-center text-gray-900 hover:text-purple-500 hover:bg-pink-300 rounded"
            to="/market">
            Market
          </RouterLink>
          <button v-if="!authStore.isLoggedIn" class="hidden sm:block navbar__log__logout justify-center items-center"
            @click="signOutHandler">
            <ButtonComp :text="'Logout'" :isValid="true"
              class="h-10 w-24 bg-red-500 hover:bg-red-700 text-white  font-bold rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 text-center">
            </ButtonComp>
          </button>
        </template>
      </div>
      <template v-if="!authStore.isLoggedIn">
        <div class="mt-3">
          <div
            class="navbar__log flex flex-wrap gap-2 -translate-y-2 ml-2 flex-col md:flex-row items-center justify-center">
            <RouterLink to="/login" class="navbar__log__login flex justify-center ">
              <ButtonComp text="Login" :isValid="true">
              </ButtonComp>
            </RouterLink>
            <RouterLink to="/register" class="navbar__log__register  flex justify-center">
              <ButtonComp text="Register" :isValid="true">
              </ButtonComp>
            </RouterLink>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="flex items-center justify-center flex-wrap">
          <button class=" p-1.5 sm:inline navbar__log__logout  justify-center items-center" @click="signOutHandler">
            <ButtonComp :text="'Logout'" :isValid="true"
              class="h-10 w-24 bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 text-center">
            </ButtonComp>
          </button>
        </div>
      </template>
    </div>
  </nav>
  <RouterView />
</template>

<style lang="scss" scoped>
// .v-enter-active,
// .v-leave-active {
//   transition: opacity 0.5s ease;
// }

// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
// }

// .navbar {
//   @apply relative px-4 py-4 flex justify-between items-center bg-white mb-0;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

//   &__logo {
//     @apply flex justify-center items-center text-lg h-10 cursor-pointer;
//     @apply hover:scale-110;
//   }

//   &__route {
//     @apply text-sm;
//     @apply hover:font-extrabold;
//   }

//   &__log {
//     @apply hidden sm:flex;

//     .navbar__log__login,
//     .navbar__log__register,
//     .navbar__log__logout {
//       @apply hidden lg:inline-block lg:ml-auto lg:mr-3;
//     }
//   }

//   &__mobile {
//     @apply block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded;
//   }
// }

// .mobile__log {
//   @apply text-white block px-4 py-3 mb-3 leading-loose text-base text-center font-semibold bg-blue-500 hover:bg-blue-600 rounded-xl;
// }

// .mobile__reg {
//   @apply text-white block px-4 py-3 mb-3 leading-loose text-base text-center font-semibold bg-gray-300 hover:bg-gray-400 rounded-xl;
// }

// .router-link-active {
//   @apply font-bold;
// }
</style>