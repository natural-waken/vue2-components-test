// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 这里就不要直接暴露了  先创建
// 先接住这个实例对象，然后再处理之后暴露  不然直接暴露，就没机会处理了
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },

            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    // 意思就是这两个东西需要权限的校验
                    meta: { isAuth: true, title: '新闻' },

                    // 独享路由守卫
                    // beforeEnter: (to, from, next) => {
                    //     // 里面逻辑和全局前置路由一样
                    //     console.log('独享路由守卫', to, from);

                    //     if (to.meta.isAuth) {  // 判断是否需要鉴权
                    //         if (localStorage.getItem('school') === 'atguigu') {
                    //             next()
                    //         } else {
                    //             alert('学校名不对，无权限查看！')
                    //         }
                    //     } else {
                    //         next()
                    //     }

                    // }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },

                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },

                            props({ query: { id, title } }) {
                                return { id, title }
                            },
                        }
                    ]
                }
            ]
        },
    ]
})


// 全局前置路由守卫 ------  初始化时候被调用、每次路由切换之前调用
// 这个再路由每一次切换时都会调用
// 就是比如是从 A 路由切换到 B 就会调用 而且是在切换之前调用
// router.beforeEach((to, from, next) => {
// console.log(to, from);

// if (to.path === '/home/news' || to.path === '/home/message') {
//     if (localStorage.getItem('school') === 'atguigu') {
//         next()
//     } else {
//         alert('学校名不对，无权限查看！')
//     }
// } else {
//     next()
// }
// })

// 全局前置路由守卫  ------  初始化时候被调用、每次路由切换之前调用
// router.beforeEach((to, from, next) => {
// if (to.meta.isAuth) {  // 判断是否需要鉴权
//     if (localStorage.getItem('school') === 'atguigu') {
//         next()
//     } else {
//         alert('学校名不对，无权限查看！')
//     }
// } else {
//     next()
// }
// })

// 全局后置路由守卫  ------  初始化时候被调用、每次路由切换之后调用
// router.afterEach((to, from, next) => {
//     // 在前置里面已经判断完了  那么要是能到后置这里来 就说明已经是经过权限判断通过的路由了
//     // 就是这个时候是已经切换好了的路由
//     // 这个时候我们再改变文件 title
//     console.log('后置路由守卫');
//     document.title = to.meta.title || '硅谷系统'
// })



export default router





