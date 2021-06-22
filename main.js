import Vue from 'vue'
import App from './App'

import share from './common/share.js'
import api from './httpconfig/api.js'
import uView from "uview-ui";
Vue.use(uView);
Vue.prototype.$http = api


Vue.config.productionTip = false

Vue.mixin(share) 

App.mpType = 'app'

const app = new Vue({
    ...App,share
})
app.$mount()
