import Vue from 'vue'
import App from './App'
import vanbutton from './wxcomponents/vant/button/index'
import share from './common/share.js'


Vue.component('van-button', vanbutton);
Vue.config.productionTip = false
Vue.mixin(share) 
App.mpType = 'app'

const app = new Vue({
    ...App,share
})
app.$mount()
