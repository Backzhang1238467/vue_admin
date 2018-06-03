import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/Login'
import home from '@/views/Home.vue'
import welcome from '../views/welcome.vue'
import user from '../views/user.vue'
Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/',
      name: 'Home',
      component: home,
      redirect: {
        path: 'welcome'
      },
      children: [{
        name: 'Welcome',
        path: 'welcome',
        component: welcome
      },
      {
        name: 'user',
        path: 'user',
        component: user
      }
    ]
    }
  ]
})

//注册一个全局守卫，作用是在路由跳转钱，对路由进行判断，防止未登录用户直接登录到需要登录的页面
router.beforeEach((to,form,next) => {
  let token = localStorage.getItem('mytoken')
  
  //如果已经登录--放行
  if(token) {
    console.log('mytoken',1111)
    next()
  }else {
    //如果未登录，访问非登录页面立刻跳转到登录页面
    if(to.path !== '/login'){
      console.log('mytoken',123)
      next({path:'/login'})
    }else{
      //如果未登录，但访问的是登录页面，直接进入
      next()
    }
  }
})
export default router