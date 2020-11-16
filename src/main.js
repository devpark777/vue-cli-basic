import Vue from 'vue'
// import { component } from 'vue/types/umd';
import App from './App.vue'
import vuetify from './plugins/vuetify';

import StatusComp from './components/Status.vue'
import VuetifyExComp from './components/VuetifyEx.vue'

Vue.config.productionTip = false

Vue.component('AppStatus',StatusComp)
Vue.component('VuetifyExComp',VuetifyExComp)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
