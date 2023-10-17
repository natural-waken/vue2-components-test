<template>
    <div class="app">
        <h1>{{ msg }} 学生姓名是：{{ studentName }}</h1>

        <!-- 通过父组件给子组件传递函数类型 props 的实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>
        <hr />

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
        <!-- <Student v-on:atguigu="getStudentName"></Student> -->
        <!-- 简写 -->
        <!-- <Student @atguigu="getStudentName" @demo="m1"></Student> -->
        <!-- v-on 在谁身上就是给谁绑定事件，那么就是给 Student 组件绑定(给组件实例对象 vc 绑定了这个事件)，触发了事件 atguigu，就会调用 demo 回调 -->


        <Student ref="student" @click.native="show" />
        <!-- 这样写我们就可以通过 this.$refs.student 拿到Student组件实例对象 -->
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
        methods: {
            getSchoolName(name) {
                console.log('App收到了学校名：', name);
            },
            getStudentName(name, ...params) {
                console.log('App收到了学生名', name, params);
                this.studentName = name
            },

            m1() {
                console.log('demo 事件被触发了');
            },

            show() {
                alert('show')
            }
        },

        // 第三种方法 ref 可以实现几秒之后调用
        mounted() {
            // this.$refs.student.$on('atguigu', this.getStudentName)

            // 只点击一次
            // this.$refs.student.$once('atguigu', this.getStudentName)
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