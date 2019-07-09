import Vue from 'vue'
import Router from 'vue-router'
import List from './components/cute/List.vue'
import home from "./components/cute/Home.vue"
import Titlebar from './components/cute/common/Titlebar.vue'
import bpic from './components/cute/common/bpic.vue'
import spic from './components/cute/common/spic.vue'
import Login from './components/cute/Login.vue'
import Large from './components/cute/common/Large.vue'
import Small from './components/cute/common/Small.vue'
import Nav from './components/cute/common/Nav.vue'
import Detail from './components/cute/Detail.vue'
import Title from './components/cute/common/Title.vue'
import Subtitle from './components/cute/common/Subtitle.vue'
import Size from './components/cute/common/Size.vue'
import Introduce from './components/cute/common/Introduce.vue'
import cartlist from './components/cute/common/cartlist.vue'
import cart from './components/cute/Cart.vue'
import cartbottom from './components/cute/common/cartbottom.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:home},
    {path:'/list',component:List},
    {path:'/titlebar',component:Titlebar},
    {path:'/bpic',component:bpic},
    {path:'/spic',component:spic},
    {path:'/login',component:Login},
    {path:'/large',component:Large},
    {path:'/small',component:Small},
    {path:'/nav',component:Nav},
    {path:'/detail',name:"detail",component:Detail},
    {path:'/title',component:Title},
    {path:'/subtitle',component:Subtitle},
    {path:'/size',component:Size},
    {path:'/introduce',component:Introduce},
    {path:'/cartlist',component:cartlist},
    {path:'/cart',component:cart},
    {path:'/cartbottom',component:cartbottom}
  ]
})
