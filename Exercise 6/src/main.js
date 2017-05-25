import Vue from 'vue'
import App from './App.vue'
import Heading from './Heading.vue'
import ServerStatus from './ServerStatus.vue'
import Footer from './Footer.vue'
import Servers from './Servers.vue'

Vue.component('app-heading', Heading);
Vue.component('app-server-status', ServerStatus);
Vue.component('app-footer', Footer);
Vue.component('app-servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
});
