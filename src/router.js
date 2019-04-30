import Router from "vue-router";

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: {}
    },
    {
      path: "/bar/:id",
      name: "bar",
      props: true,
      component: {}
    }
  ]
});
