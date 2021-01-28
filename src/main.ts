import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import Component from 'vue-class-component';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vant); // 导入所有组件

Component.registerHooks([
  // 组件中使用vue-router钩子
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
