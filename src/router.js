import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import member from './components/tabbar/member.vue'
import newsList from './components/news/newsList.vue'
import newsinfo from './components/news/newsinfo.vue'



const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},

        {path: '/home', component: home},
        {path: '/search', component: search},
        {path: '/shopcar', component: shopcar},
        {path: '/member', component: member},
        {path: '/home/newsList', component: newsList},
        {path: '/home/newsinfo/:id', component: newsinfo},

    ],
    linkActiveClass: 'mui-active'
})

export default router