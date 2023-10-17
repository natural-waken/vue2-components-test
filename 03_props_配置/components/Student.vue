<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        <h2 ref="title">学生年龄：{{ myAge }}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: '我是一个尚硅谷的学生',
                myAge: this.age,  // props 里面传过来的数据
            }
        },

        methods: {
            updateAge() {
                this.myAge++
                console.log(this.$refs.title);
            }
        },

        // 接收方式一  简单方式
        props: ['name', 'gender', 'age']

        // 方式二  名称加类型限制
        // 接受的同时对数据进行限制
        // 这样那边年龄传数据就必须传数字型
        // props: {
        //     name: String,
        //     age: Number,
        //     gender: String,
        // }

        // 方式三  
        // 接受的同时对数据进行限制 + 默认值的指定 + 必要性的限制
        // props: {
        //     name: {
        //         type: String,  // name 的类型是字符串
        //         required: true,  // name 是必须的
        //     },
        //     age: {
        //         type: Number,  
        //         default: 99,  // 默认值 如果不传值的话 默认是 99
        //     },
        //     gender: {
        //         type: String,  
        //         required: true,  
        //     }
        // }
    }
</script>