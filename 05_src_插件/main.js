// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入插件
import plugins from './plugins' 

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 应用（使用）插件
Vue.use(plugins, 1, 2, 3)  // 可以进行传参

// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App),
})
