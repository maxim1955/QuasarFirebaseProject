const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {path: "/Todo", component: () => import("pages/Todo.vue")},
      {path: "/Help", component: () => import("pages/Help.vue")},
      {path: "/about", component: () => import("pages/About.vue")},
      {path: "/taskdone", component: () => import("pages/taskDone.vue")},
      {path: "/Register", component: () => import("pages/Register_pages.vue")},
    ],
  },


  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
