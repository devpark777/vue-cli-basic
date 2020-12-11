import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Product from './components/Product.vue'
import TodoList from './components/TodoList.vue'
import Memo_origin from './components/Memo_origin.vue'
import Memo_vuex from './components/Memo_vuex.vue' //vuex로 구현한 것
import Memo_vuex_add from './components/Memo_vuex_add.vue' //vuex로 구현한 것
import Memo_vuex_update from './components/Memo_vuex_update.vue' //vuex로 구현한 것
//import Login from './components/Login.vue'
import User from './components/User.vue'
import Axios_UserList from './components/Axios_UserList.vue'
import Images from './components/Images.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes : [
        { 
          name:'login', 
          path:'/login',
          component: () => import("./components/Login.vue")
        },
        {name:'home', path:'/', component: Home},
        {name:'product', path:'/product', component: Product},
        {name:'about', path:'/about', component: About},
        {name:'todolist', path:'/todolist', component: TodoList},
        {name:'memo_origin', path:'/memo_origin', component: Memo_origin},
        {name:'memo_vuex', path:'/memo_vuex', component: Memo_vuex},
        {name:'memo_vuex_add', path:'/memo_vuex_add', component: Memo_vuex_add},
        {name:'memo_vuex_update', path:'/memo_vuex_update', component: Memo_vuex_update, props : true},
        {name:'user', path:'/user', component: User},
        {name:'axios_userlist', path:'/axios_userlist', component: Axios_UserList},
        {name:'images', path:'/images', component: Images}

    ]
})

export default router