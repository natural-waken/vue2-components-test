// 引入 Vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
import { mixin, mixin2 } from './mixin'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 这么一写 所有的 vc vm 都可以使用
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建 vm
new Vue({
    el: '#app',
    render: h => h(App),
})
