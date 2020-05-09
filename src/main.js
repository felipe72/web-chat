import { firestorePlugin } from 'vuefire'
import Vue from 'vue'
import App from './App.vue'

Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
