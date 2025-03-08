import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
 
 const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
     {
       path: '/',
      name: 'event-list-view',
      component: EventListView,
     },
    ]
})

