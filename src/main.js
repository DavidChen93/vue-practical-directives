import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directives from "./directives";
import './assets/css/common.less'

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

Vue.config.productionTip = false;
Vue.use(directives);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
