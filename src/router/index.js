import { createRouter, createWebHistory } from 'vue-router'
import AcceuilPage from "@/views/AcceuilPage.vue";
import AbilityPage from '@/views/AbilityPage.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path :"/",
    name : 'acceuil' ,
    component : AcceuilPage
    },
    {
      path :"/reactivityTest/:id",
      name : 'Ability' ,
      component : AbilityPage, 
      props: true
    },
  ]
})



export default router
