<script setup lang="ts">
import { useRoute } from "vue-router";
import { useFetch } from "../shared/utils/useFetch/useFetch";
import { Issue } from "../types/Issue";

const route = useRoute();
const id = route.params.id;

const { data } = await useFetch<Issue[]>(`/groups/${id}/issues?per_page=100`)
  .get()
  .json<Issue[]>();
</script>

<template>
  <table :class="cls.table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Assignee</th>
        <th>Time estimate</th>
        <th>Time spent</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="issue in data" :key="issue.id">
        <td>
          <a :href="issue.web_url" target="_blank">{{ issue.title }}</a>
          <br />{{ issue.labels.join(", ") }}
        </td>
        <td>{{ issue.assignee?.name }}</td>
        <td>{{ issue.time_stats.human_time_estimate }}</td>
        <td>{{ issue.time_stats.human_total_time_spent ?? 0 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style module="cls">
.table {
  width: 100%;
  border-collapse: collapse;
}

.table tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.table tbody tr td {
  padding: 0.5rem 0;
}
</style>
