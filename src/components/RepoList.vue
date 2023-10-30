<script setup lang="ts">
import { useFetch } from "../shared/utils/useFetch/useFetch";
import { Project } from "../types/Project";

const { data, isFetching } = await useFetch<Project[]>(
  "/projects?membership=true"
)
  .get()
  .json<Project[]>();

</script>

<template>
  <article>
    <p v-if="isFetching">Loading...</p>

    <ul v-else-if="data">
      <li v-for="project in data" :key="project.id">
        <RouterLink :to="`/project/${project.namespace.id}`">
          {{ project.name_with_namespace }}
        </RouterLink>
      </li>
    </ul>
  </article>
</template>
