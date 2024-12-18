import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase";

import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", redirect: "/home" }, // Home será la página principal
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: false }, // Ruta pública, pero personalizada con lógica
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const user = auth.currentUser;

  if (requiresAuth && !user) {
    next("/login");
  } else {
    next();
  }
});

export default router;
