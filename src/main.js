import 'script-loader!foundation-sites/dist/js/foundation.min';

import Vue from 'vue'
import App from './App.vue'
require('./assets/sass/app.scss');

Vue.config.productionTip = false;

new Vue({
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
