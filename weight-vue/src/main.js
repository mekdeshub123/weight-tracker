import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import WeightAPI from '@/services/WeightAPI'

Vue.config.productionTip = false

Vue.prototype.$weight_api = WeightAPI

new Vue({
  render: h => h(App),
}).$mount('#app')
