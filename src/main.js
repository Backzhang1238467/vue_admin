// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 1. 集成element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 2. 导入全局样式文件
import '@/styles/index.scss'

// 3. 集成路由
import router from './router'




new Vue({
  el: '#app',
  router,
 
  components: { App },
  template: '<App/>'
})
