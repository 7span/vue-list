import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Index from "./Index.vue";

const app = createApp();

const routes = [
  {
    path: "/",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
export default router;
