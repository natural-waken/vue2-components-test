const obj = {
    install() {
        // obj 对象里面包含一个 install 方法
    }
}

export default {
    // 第一个参数是 Vue  后面参数就是组件使用时可以进行传参
    install(Vue, x, y, z) {
        console.log(x, y, z);
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 全局自定义指令  对象式
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element, binding) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            },
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                }
            },
        })

        // 给 Vue 原型上添加一个方法（vm 和 vc 都能用了）
        Vue.prototype.hello = () => {
            alert('hello')
        }


        console.log('@@@install', Vue);
    }
}


