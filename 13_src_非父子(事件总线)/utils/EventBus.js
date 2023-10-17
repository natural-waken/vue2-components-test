// 1. 创建一个都能访问到的事件总线（空的 Vue 实例）
import Vue from 'vue'

const Bus = new Vue()

export default Bus

// 其他组件要是需要借助这个媒介 Bus   只需要导入一下就好了