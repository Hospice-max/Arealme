import { createRouter, createWebHistory } from 'vue-router'
import AcceuilComponent from "@/components/AcceuilComponent.vue";
import AbilityComponent from "@/components/AbilityComponents.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path :"/",
    name : 'acceuil' ,
    component : AcceuilComponent},

    {
      path :"/reactivityTest",
      name : 'Ability' ,
      component : AbilityComponent
    }
  ]
})

export default router
