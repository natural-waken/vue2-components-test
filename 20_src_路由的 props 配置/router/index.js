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
                            path: 'detail/:id/:title',
                            component: Detail,
                            
                            // 谁接收参数东西就给谁配置
                            // props 第一种写法，值为对象，该对象中所有 key-value 都会以 props 的形式传给 Detail 组件
                            // props: { a:1, b:'hello'},

                            // 第二种写法 值为布尔值，若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 形式传给 Detail 组件
                            // props: true,

                            // 第三种写法 值为函数
                            // props: function() {}
                            // 参数是 $route
                            // props($route) {
                            //     // return {id: '666', title: '你好啊'}
                            //     return {id: $route.params.id, title: $route.params.title}
                            // },


                            // 也可以在这里解构赋值 连续解构赋值
                            props({params: {id, title}}) {
                                return {id, title}
                            },
                        }
                    ]
                }
            ]
        },
    ]
})




