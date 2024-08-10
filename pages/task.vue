<script setup lang="ts">
const { data: tasks } = useFetch('/api/task');
</script>
<template>
  <div>
    <h1>Main Page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>
  </div>
</template>
