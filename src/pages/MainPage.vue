<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
import { COOKIE_API_TOKEN } from "../shared/const/cookies";

const Auth = defineAsyncComponent(() => import("../components/Auth.vue"));
const RepoList = defineAsyncComponent(
  () => import("../components/RepoList.vue")
);

const cookies = useCookies();
const isAuth = computed(() => cookies.get(COOKIE_API_TOKEN) !== undefined);
</script>

<template>
  <RepoList v-if="isAuth" />
  <Auth v-else />
</template>
