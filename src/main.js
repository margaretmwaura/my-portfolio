import 'script-loader!foundation-sites/dist/js/foundation.min';


import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import router from "./approutes/routes";

require('./assets/sass/app.scss');
import store from '../src/store/theme';
Vue.use(VueTypedJs);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    // eslint-disable-next-line
    $(this.$el).foundation();
  },
  destroyed() {
    // eslint-disable-next-line
    $(this.$el).foundation.destroy();
  },
}).$mount('#app')
