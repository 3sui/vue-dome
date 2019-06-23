import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import './css/index.css'

import app from './app.vue'
import router from './router.js'

import {
    Header,
    Swipe,
    SwipeItem,
    Button
} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/api'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)



import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})