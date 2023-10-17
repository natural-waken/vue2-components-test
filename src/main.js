import Vue from 'vue'
import App from './App.vue'

// 完整引入
// 引入 ElementUI 组件库
// import ElementUI from 'element-ui';
// 引入 ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 应用 ElementUI
// Vue.use(ElementUI);

// 我们按需引入，不然所有组件都在，文件所占空间太大
import { Button, Row, DatePicker } from 'element-ui'
// 注册全局组件
Vue.component('atguigu-button', Button)
Vue.component('atguigu-row', Row)
Vue.component('atguigu-date-picker', DatePicker)


new Vue({
    render: h => h(App),
}).$mount('#app')



