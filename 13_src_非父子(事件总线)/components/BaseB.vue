<template>
    <div class="baseA">
        我是 B 组件（发布方）
        <button @click="clickSend">发布通知</button>
    </div>
</template>

<script>
    import Bus from '../utils/EventBus'
    export default {
        methods: {
            clickSend() {
                // 3. B 组件（发送方）触发事件的方式传递参数（发布消息）
                // 第二个是参数 传给监听事件那边
                Bus.$emit('sendMsg', '今日晴天，适合郊游')
            }
        },
    }
</script>

<style scoped>
    .baseA {
        width: 200px;
        height: 150px;
        padding: 10px;
        margin-top: 10px;
        border: 3px solid #000;
        border-radius: 5px;
        font-size: 20px;
    }
</style>