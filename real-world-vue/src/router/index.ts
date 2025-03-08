import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue"; // เปลี่ยนชื่อให้สื่อความหมาย

import EventListView from "../views/EventListView.vue";
import EventDetailView from "@/views/event/DetailView.vue";
import EventRegisterView from "@/views/event/RegisterView.vue";
import EventEditView from "@/views/event/EditView.vue";

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
    {
      path: "/event/:id/register",
      name: "event-register-view",
      component: EventRegisterView,
      props: true,
    },
    {
      path: "/event/:id/edit",
      name: "event-edit-view",
      component: EventEditView,
      props: true,
    },
  ],
});

export default router;
