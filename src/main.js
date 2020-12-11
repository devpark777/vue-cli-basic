import Vue from 'vue'
// import { component } from 'vue/types/umd';
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from './router.js'
import store from './store.js'


import StatusComp from './components/Status.vue'

Vue.config.productionTip = false

Vue.component('AppStatus',StatusComp)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
