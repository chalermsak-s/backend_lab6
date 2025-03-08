<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Event } from "@/types";
import eventService from "@/services/EventService";
import { useRouter } from "vue-router";
const event = ref<Event>();
const props = defineProps<{ id: string }>();
const id = Number(props.id);
const router = useRouter();
import { RouterLink, RouterView } from "vue-router";

onMounted(() => {
  eventService
    .getEvent(id)
    .then((response: any) => {
      event.value = response.data;
    })
    .catch((error: any) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: "404-resource-view",
          params: { resource: "event" },
        });
      } else {
        router.push({ name: "network-error-view" });
      }
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-detail-view', params: { id } }"
        >Details</RouterLink
      >
      <RouterLink :to="{ name: 'event-register-view', params: { id } }"
        >Register</RouterLink
      >
      <RouterLink :to="{ name: 'event-edit-view', params: { id } }"
        >Edit</RouterLink
      >
    </nav>
    <RouterView :event="event" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
