import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 引用element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引用font-awesome
import "font-awesome/css/font-awesome.min.css";
// 引入echarts
import echarts from "echarts";

// 引用vuex
import Vuex from "vuex";
import store from "./store/index";
// 引用axios
import axios from "axios";
Vue.prototype.$ajax = axios;

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

Vue.use(ElementUI);
/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
