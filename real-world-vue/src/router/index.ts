import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue"; // เปลี่ยนชื่อให้สื่อความหมาย
import EventDetailView from "../views/EventDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list-view",
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page as string) || 1,
      }),
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/event/:id",
      name: "event-detail-view",
      component: EventDetailView,
      props: true,
    },
  ],
});

export default router;
