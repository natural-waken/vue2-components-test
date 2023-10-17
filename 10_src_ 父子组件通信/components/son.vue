<template>
    <div style="border: 3px solid #000; margin: 10px;">
        我是 son 组件 {{ title }}
        <button @click="changeFn">修改 title</button>
    </div>
</template>

<script>
    export default {
        // 父组件给子组件 2. 通过 props 进行修改
        props: ['title'],
        methods: {
            changeFn() {
                // 子组件给父组件 1. 通过 $emit，像父组件发送消息通知
                this.$emit('changeTitle', '传智教育')
            }
        }
    }
</script>

<style scoped>

</style>