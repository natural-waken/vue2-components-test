<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷atguigu',
                address: '北京',
            }
        },
        mounted() {
            // 绑定事件
            // this.$bus.$on('hello', (data)=> {
            //     console.log('我是School组件，收到了数据',  data);
            // }

            // 订阅一个消息  消息名 hello  执行回调函数
            // 等 有人发布了消息  就会执行这个回调
            this.pubID = pubsub.subscribe('hello', (msgName, data)=> {
                // 第一个参数是事件名 第二个是传过来的数据
                console.log('有人发布了hello消息, hello 消息的回调执行了', msgName, data);
            })
        },

        beforeDestroy() {
            // 销毁之前解绑事件
            // this.$bus.$off('hello')

            // 取消订阅消息
            pubsub.unsubscribe(this.pubID)
        },
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>