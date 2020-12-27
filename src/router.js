import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue';
import Explore from './pages/Explore.vue';
import Notifications from './pages/Notifications.vue';
import Messages from './pages/Messages.vue';
import Profile from './pages/Profile.vue';
import More from './pages/More.vue';

const routes = [
  { path:'/', component: Home},
  { path:'/explore', component: Explore},
  { path:'/notifications', component: Notifications},
  { path:'/messages', component: Messages},
  { path:'/profile', component: Profile},
  { path:'/more', component: More},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;