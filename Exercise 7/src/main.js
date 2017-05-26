import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    sendStatus(server) {
      this.$emit('showStatus', server)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
