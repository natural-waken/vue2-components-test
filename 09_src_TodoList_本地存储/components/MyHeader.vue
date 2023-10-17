<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    export default {
        name: 'MyHeader',
        // 方法二  使用 data v-model 
        data() {
            return {
                title: '',
            }
        },

        props: ['addTodo'],

        methods: {
            add(e) {
                // 方法一 使用 e.target.value 拿到值
                // 将用户的输入包装成一个 todo 对象
                // console.log(e.target.value);
                // 输入完之后清空
                // e.target.value = ''

                // 检验数据
                if (!this.title.trim()) return alert('输入不能为空')

                // 方法二 使用 this.title data 里面的数据
                const todoObj = { id: nanoid(), title: e.target.value, done: false }

                // 在这里调用这个方法  就会将参数传过去  就可以实现添加数据
                this.addTodo(todoObj)

                // 最后输入完之后清空
                this.title = ''






            }
        },
    }
</script>

<style scoped>
    /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>