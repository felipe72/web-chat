import { firestorePlugin } from 'vuefire'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'


const serialize = (snapshot) => {
  return Object.defineProperty(snapshot.data(), 'id', { value: snapshot.id })
}
Vue.use(firestorePlugin, { serialize });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
