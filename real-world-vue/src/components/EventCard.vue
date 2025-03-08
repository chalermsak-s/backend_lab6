<script setup lang="ts">
defineProps<{ event: { id: number; name: string } }>();
</script>

<template>
  <div class="event-card">
    <h3>{{ event.name }}</h3>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
