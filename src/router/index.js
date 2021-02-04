import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/homeMarie",
    name: "HomeMairie",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeMairie.vue"),
  },
  {
    path: "/homeHopitale",
    name: "HomeHopitale",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeHopital.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/ValiderDecNais",
    name: "ValiderDecNais",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/Mairie/ValiderNaisDecl.vue"),
  },
  {
    path: "/RegistresNaissance",
    name: "RegistresNaissance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/Mairie/RegistresNaissance.vue"),
  },
  {
    path: "/pdfMairie",
    name: "pdfMairie",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/Mairie/pdfMairie.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
