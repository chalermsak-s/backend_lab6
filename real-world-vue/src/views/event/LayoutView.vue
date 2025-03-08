<script>
export default {
  props: {
    event: Object,
  },
};
</script>
<template>
  <div v-if="event">
    <nav>
      <router-link :to="{ name: 'event-detail-view', params: { id: event.id } }"
        >Details</router-link
      >
      |
      <router-link
        :to="{ name: 'event-register-view', params: { id: event.id } }"
        >Register</router-link
      >
      |
      <router-link :to="{ name: 'event-edit-view', params: { id: event.id } }"
        >Edit</router-link
      >
    </nav>
  </div>
</template>
