import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/main.vue";// 登录页面
import camera from "@/components/camera.vue";// 登录页面
import tree from "@/components/tree.vue";// 登录页面

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      children: [
        {
          path: "/HelloWorld/camera",
          name: "camera",
          component: camera
        },
        {
          path: "/HelloWorld/tree",
          name: "tree",
          component: tree
        }
      ]
    }
  ]
});
