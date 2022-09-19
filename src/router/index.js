import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import PrivateLayout from "@/layouts/PrivateLayout.vue";
import TasksListView from "@/views/TasksListView.vue";
import addTaskView from "@/views/addTaskView.vue";
import updateView from "@/views/updateView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [{ path: "", name: "home", component: HomeView }],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/update",
    component: PrivateLayout,
    children: [
      {
        path: ":id",
        name: "taskUpdate",
        component: updateView,
      },
    ],
  },
  {
    path: "/tasks",
    component: PrivateLayout,
    children: [
      {
        path: "",
        name: "taskList",
        component: TasksListView,
      },
    ],
  },
  {
    path: "/adicionar",
    component: PrivateLayout,
    children: [
      {
        path: "",
        name: "addTask",
        component: addTaskView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
