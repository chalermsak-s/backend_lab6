import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue"; // เปลี่ยนชื่อให้สื่อความหมาย
import EventDetailView from "../views/EventDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventListView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/event/12",
      name: "event-detail-views",
      component: EventDetailView,
    },
  ],
});

export default router;
