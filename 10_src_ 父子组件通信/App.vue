<template>
    <div style="border: 3px solid #000; margin: 10px;">
        我是 App 组件

        <!-- 父组件给子组件 1. 给组件标签，添加属性方式，传值，这时候就把 myTitle 传给了 son.vue -->

        <!-- 子组件传父组件 2. 父组件 对消息进行监听 -->
        <son :title="myTitle" @changeTitle="handleChange"></son>
    </div>
</template>

<script>
    import son from './components/son.vue'

    export default {
        data() {
            return {
                myTitle: '黑马程序员',
            }
        },

        components: {
            son,
        },

        methods: {
            handleChange(newTitle) 
            {
                // 子组件传给父组件 3. 提供处理函数，修改逻辑
                this.myTitle = newTitle
            }
        },
    }
</script>

<style>

</style>