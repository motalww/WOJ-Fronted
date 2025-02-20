import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ACCESS_ENUM from "@/access/AccessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/401",
    name: "无权限",
    meta: {
      hideInMenu: "true",
    },
    component: () => import("../views/NoAuth.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
