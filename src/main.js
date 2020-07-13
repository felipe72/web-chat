import { firestorePlugin } from 'vuefire'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(firestorePlugin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
