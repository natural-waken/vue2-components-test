// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            // 路由名字可以让我们在页面跳转时简化一些代码
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            
                            // 也可以在这里解构赋值 连续解构赋值
                            props({query: {id, title}}) {
                                return {id, title}
                            },
                        }
                    ]
                }
            ]
        },
    ]
})




