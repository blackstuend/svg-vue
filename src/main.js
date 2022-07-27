import Vue from 'vue'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'

Vue.config.productionTip = false

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./assets/icons', true, /\.svg$/)
requireAll(req)

Vue.component('SvgIcon', SvgIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
