<script setup lang="ts">
import { useEventStore } from "@/stores/event";
import { storeToRefs } from "pinia";
const props = defineProps<{ id: string }>();
const store = useEventStore();
const { event } = storeToRefs(store);
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-detail-view', params: { id: props.id } }"
        >Details</RouterLink
      >
      <RouterLink
        :to="{ name: 'event-register-view', params: { id: props.id } }"
        >Register</RouterLink
      >
      <RouterLink :to="{ name: 'event-edit-view', params: { id: props.id } }"
        >Edit</RouterLink
      >
    </nav>
    <RouterView :event="event" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
