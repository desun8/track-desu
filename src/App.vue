<script setup lang="ts"></script>

<template>
  <h1>Welcome to TrackDesu App</h1>

  <RouterView v-slot="{ Component }" class="page-wrapper">
    <template v-if="Component">
      <Transition mode="out-in">
        <Suspense timeout="0">
          <component :is="Component"></component>
          <template #fallback> Loading... </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>
