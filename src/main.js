import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from "ant-design-vue/lib/icon";
import "ant-design-vue/dist/antd.css";

Vue.component(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
