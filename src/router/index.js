import { createRouter, createWebHistory } from 'vue-router'
import AcceuilComponent from "@/components/AcceuilComponent.vue";
import AbilityPage from '@/views/AbilityPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path :"/",
    name : 'acceuil' ,
    component : AcceuilComponent},

    {
      path :"/reactivityTest",
      name : 'Ability' ,
      component : AbilityPage
    }
  ]
})

export default router
