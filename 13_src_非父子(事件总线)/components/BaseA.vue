<template>
    <div class="baseA">
        我是 A 组件（接收方）
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    import Bus from '../utils/EventBus'
    export default {
        created() {
            // 2. 在 A 组件（接收方），进行监听 Bus 事件（订阅消息）
            Bus.$on('sendMsg', (msg) => {
                this.msg = msg
            })
        },
        data() {
            return {
                msg: '',
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