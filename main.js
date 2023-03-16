import App from './App';
// import Vue from 'vue';
// // Vue.prototype.$store = store
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
//     ...App,
// })
// app.$mount()

// #ifdef VUE3
import { createSSRApp } from 'vue'
import store from './store'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif