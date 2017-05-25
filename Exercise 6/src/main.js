import Vue from 'vue'
import App from './App.vue'
import Heading from './components/shared/Heading.vue'
import ServerStatus from './components/server/ServerStatus.vue'
import Footer from './components/shared/Footer.vue'
import Servers from './components/server/Servers.vue'

Vue.component('app-heading', Heading);
Vue.component('app-server-status', ServerStatus);
Vue.component('app-footer', Footer);
Vue.component('app-servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
});
