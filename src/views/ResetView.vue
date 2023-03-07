<script setup>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { computed, ref } from "vue";
import ButtonComp from "../components/ButtonComp.vue";
import { useRegexpStore } from "../stores/use-regexp";

const email = ref("");
const auth = getAuth();
const regexpStore = useRegexpStore();

const isValidEmail = computed(() => {
  return regexpStore.checkEmail(email.value);
});

const resetPassword = () => {
  if (isValidEmail) {
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        alert("Password reset email sent!, Check your spam folder");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid email!")
      });
  }
}

</script>

<template>
  <div class="bg-gray-100 h-screen  flex flex-col justify-center items-center">
    <div class="flex justify-center w-full">
      <div class="w-full md:w-1/2">
        <div class="shadow-lg rounded-lg px-4 py-6">
          <h5 class="text-lg font-semibold mb-4">Reset Password</h5>
          <p class="text-sm text-gray-600 mb-4">Enter your email address to reset your password</p>
          <div class="mb-4">
            <input type="text"
              class="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              v-model="email" placeholder="Your email..." maxlength="30">
            <div v-if="!isValidEmail && email.length > 0" class="text-red-500 text-sm mt-1">
              Enter a valid email!
            </div>
          </div>
          <div class="flex justify-center">
            <ButtonComp @click="resetPassword" text="Reset" :isValid="isValidEmail"
              class="text-blue-500 font-semibold focus:outline-none  ">
            </ButtonComp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>