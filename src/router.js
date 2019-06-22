import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import member from './components/tabbar/member.vue'


const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},

        {path: '/home', component: home},
        {path: '/search', component: search},
        {path: '/shopcar', component: shopcar},
        {path: '/member', component: member},

    ],
    linkActiveClass: 'mui-active'
})

export default router