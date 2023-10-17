<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                gender: '男',
                number: 0,
            }
        },
        methods: {
            sendStudentName() {
                // this.$bus.$emit('hello', this.name)

                // 发布消息
                pubsub.publish('hello', 777)
            }
        },
        
    }
</script>

<style scoped>
    .student {
        background-color: orange;
        padding: 5px;
        margin-top: 30px;

    }
</style>

