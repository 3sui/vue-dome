import Vue from 'vue'
import app from './app.vue'


import { Header } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';



Vue.component(Header.name, Header)

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

const vm = new Vue({
    el: '#app',
    render: c => c(app)
})
