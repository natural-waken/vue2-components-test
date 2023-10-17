<template>
    <div class="app">
        <h1>{{ msg }} 学生姓名是：{{ studentName }}</h1>
        <School/>
        <Student/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name: 'App',
        components: {
            Student,
            School,
        },
        data() {
            return {
                msg: '你好啊！',
                studentName: ''
            }
        },
        
    }
</script>

<style>
    .app {
        background-color: gold;
        padding: 5px;
    }
</style>

11