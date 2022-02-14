import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CoverPage from "../views/CoverPage.vue";
import ScrumTeam from "../views/ScrumTeam.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "CoverPage",
    component: CoverPage,
  },
  {
    path: "/:id",
    name: "ScrumTeam",
    component: ScrumTeam,
  },
  {
    path: "*",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
