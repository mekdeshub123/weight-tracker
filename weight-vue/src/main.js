import Vue from 'vue'
import App from './App.vue'
import  BootstrapVue from 'bootstrap-vue'

//import RecordServices and add to vue class prototype
import RecordAPIServices from '@/services/RecordServices'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.config.productionTip = false

Vue.prototype.$record_api = RecordAPIServices

new Vue({
  render: h => h(App),
}).$mount('#app')
