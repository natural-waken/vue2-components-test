// 该文件是整个项目的入口文件

// 引入 Vue  精简版 vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'

// 关闭 vue 生产提示
Vue.config.productionTip = false

// const a = 1

// 创建 Vue 实例对象---vm
new Vue({
  el: '#app',
  // 完成了这个功能，将 App 组件放入容器
  render: h => h(App),
})

