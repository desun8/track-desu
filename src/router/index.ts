import { createRouter, createWebHistory, type Router } from "vue-router";
import { useCookies } from "@vueuse/integrations/useCookies";
import { COOKIE_API_TOKEN } from "../shared/const/cookies";
import { RoutePath, routes } from "./routes";

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, _, next) => {
  if (to.meta.authOnly && !useCookies().get(COOKIE_API_TOKEN)) {
    next({ path: RoutePath.main });
  } else next();
});
