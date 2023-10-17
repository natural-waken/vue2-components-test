<template>
    <div class="app">
        <span>我是 App 组件</span>
        <button @click="change">修改数据</button>
        <SonA></SonA>
        <SonB></SonB>
    </div>
</template>

<script>
    import SonA from './components/SonA'
    import SonB from './components/SonB'

    export default {
        // 这个里面就是共享的数据
        provide() {
            return {
                color: this.color,
                userInfo: this.userInfo,
            }
        },
        data() {
            return {
                color: 'pink',  // 简单类型(非响应式)
                userInfo: {  // 复杂类型(响应式)
                    name: 'zs',
                    age: 2,
                }
            }
        },
        methods: {
            change() {
                // 简单类型是非响应式，在这修改数据，不会渲染到页面上 
                // this.color = 'blue'

                // 复杂类型响应式，页面使用到的也会更改
                this.userInfo.name = 'ls'
            }
        },
        components: {
            SonA,
            SonB,
        }
    }
</script>

<style>
    .app {
        width: 400px;
        height: 580px;
        padding: 10px;
        border: 3px solid #000;
        border-radius: 5px;
        font-size: 20px;
        margin: 100px auto;
    }
</style>
