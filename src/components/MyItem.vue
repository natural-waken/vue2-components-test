<template>
    <transition name="todo" appear>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />

                <span v-show="!todo.isEdit">{{todo.title}}</span>
                
                <input 
                    type="text" 
                    v-show="todo.isEdit" 
                    :value="todo.title" 
                    @blur="handleBlur(todo, $event)"
                    ref="inputTitle"
                >

            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>
    
    </transition>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'MyItem',

        props: ['todo'],
        methods: {

            // 勾选 or 取消勾选
            handleCheck(id) {
                // 通知 App 组件将对应的 todo 对象的 done 值取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo', id)
            },

            // 删除
            handleDelete(id) {
                if (confirm('确定删除吗？')) {
                    // 第一种方法 父组件传事件 此时 deleteTodo 是事件名
                    // this.deleteTodo(id)
                    // 第二种方法 是自定义事件 deleteTodo 是自定义事件名
                    // this.$bus.$emit('deleteTodo', id)

                    // 第三种方法 发布消息 deleteTodo 是消息名
                    pubsub.publish('deleteTodo', id)
                }
            },

            // 编辑
            handleEdit(todo) {
                // 设置属性  不能这样写
                // todo.isEdit = true

                // 如果 todo 身上有这个属性，那就直接改为 true
                if (todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true
                } else {
                    this.$set(todo, 'isEdit', true)
                }

                // 如果直接写这句话，那么上面修改了 isEdit 值，并不会直接取解析模板，是等下面这句执行完再去重新解析模板，三十一这句话无法起作用。
                // 那么就使用 $nextTick 这会等重新解析了模板再执行回调
                // this.$refs.inputTitle.focus()

                this.$nextTick(function () {
                    this.$refs.inputTitle.focus()
                })

                // 定时器也可以 因为定时器即使到点 也会到队列执行
                // setTimeout(() => {
                //     this.$refs.inputTitle.focus()
                // })
            },

            // 失去焦点回调（执行修改逻辑）
            handleBlur(todo, e) {
                todo.isEdit = false

                // 如果修改为空
                if (!e.target.value.trim()) return alert('输入不能为空！')
                this.$bus.$emit('updateTodo', todo.id, e.target.value)
            }
        },


    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #ddd;
    }

    li:hover button {
        display: block;
    }

    /* 动画 */
    .todo-enter-active {
        animation: atguigu 0.3s linear;
    }

    .todo-leave-active {
        animation: atguigu 0.3s linear reverse;
    }

    @keyframes atguigu {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

</style>