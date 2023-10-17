<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">

                <MyHeader @addTodo="addTodo"></MyHeader>

                <MyList :todos="todos"></MyList>

                <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>

            </div>
        </div>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    import MyList from './components/MyList.vue'
    import MyFooter from './components/MyFooter.vue'
    import MyHeader from './components/MyHeader.vue'

    export default {
        name: 'App',
        components: {
            MyList,
            MyFooter,
            MyHeader,

        },
        data() {
            return {
                todos: JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            // 添加一个 todo
            addTodo(todoObj) {
                this.todos.unshift(todoObj)
            },

            // 勾选 or 取消勾选一个 todo  勾选取反
            checkTodo(id) {
                this.todos.forEach((todo) => {
                    if (todo.id === id) {
                        todo.done = !todo.done
                    }
                });
            },

            // 更新修改
            updateTodo(id, title) {
                this.todos.forEach((todo) => {
                    if (todo.id === id) {
                        todo.title = title
                    }
                });
            },

            // 删除一个
            // 因为使用消息订阅与发布，第一个参数是消息名，不使用可以用这个占位
            deleteTodo(_, id) {
                this.todos = this.todos.filter((todo) => {
                    return todo.id !== id
                })
            },

            // 全选 or 取消全选
            checkAllTodo(done) {
                this.todos.forEach((todo) => {
                    todo.done = done
                })
            },

            // 清除所有已经完成的任务
            clearAllTodo() {
                this.todos = this.todos.filter((todo) => {
                    return !todo.done
                })
            }
        },
        watch: {
            todos: {
                deep: true,
                handler(value) {
                    // 因为是对象  所以要先转换成字符串
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }
        },

        // 我们绑定全局事件总线一般写在 mounted 里面
        mounted() {
            this.$bus.$on('checkTodo', this.checkTodo)
            this.$bus.$on('updateTodo', this.updateTodo)

            // 删除事件我们使用消息订阅与发布来写 
            // 订阅消息
            this.pubID = pubsub.subscribe('deleteTodo', this.deleteTodo)
        },

        // 也要记着解绑
        beforeDestroy() {
            this.$bus.$off('checkTodo')
            this.$bus.$off('updateTodo')
            pubsub.unsubscribe(this.pubID)
        },
    }
</script>

<style>
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    .btn-edit {
        color: #fff;
        background-color: rgb(105, 184, 240);
        border: 1px solid #567fd6;
        margin-right: 5px;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>