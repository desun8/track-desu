<script setup lang="ts">
import { useCookies } from "@vueuse/integrations/useCookies";
import { ref } from "vue";
import { COOKIE_API_TOKEN } from "../shared/const/cookies";

const cookies = useCookies();
const value = ref("");

function handleSubmit() {
  cookies.set(COOKIE_API_TOKEN, value.value);
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="auth-input">Enter your API token:</label>
    <input v-model="value" id="auth-input" type="text" />
    <button>Submit</button>
  </form>
</template>
