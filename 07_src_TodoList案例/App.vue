<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">

                <!-- MyHeader -->
                <!-- 儿子给父亲传东西 就是在父亲里面写一个方法  传给儿子 -->
                <!-- 然后在儿子里面使用 props 接收 并且在 methods 里面调用这个方法传数据 就可以在 App 里面方法收到这个数据 -->

                <!-- 在添加功能里面  将一个对象方法传过去  先将这个方法传过去 receive  通过这个方法来接收那边的数据 -->
                <!-- 我们希望从 header 里面拿到输入框里面的数据 要将数据从 header 里面传到 App 里面来 -->
                <MyHeader :addTodo="addTodo"></MyHeader>

                <!-- MyList -->
                <!-- 再将 App 刚刚接收到的数据传给 list 里面进行数据渲染 -->
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>

                <!-- MyFooter -->
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>

            </div>
        </div>
    </div>
</template>

<script>
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
                // todos 数据都在 App 里面 所以对于数据的增删改查都在这 methods 里面写
                todos: [
                    { id: '001', title: '吃饭', done: true },
                    { id: '002', title: '看书', done: false },
                    { id: '003', title: '写作', done: true },
                ]
            }
        },
        methods: {
            // 添加一个 todo
            addTodo(todoObj) {
                // x 就是从 header 里面输入框传过来的数据 

                // 在数据里面加入新数据
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

            // 删除一个
            deleteTodo(id) {
                this.todos = this.todos.filter((todo) => {
                    return todo.id !== id
                })
            },

            // 全选 or 取消全选
            checkAllTodo(done) {
                this.todos.forEach((todo)=> {
                    todo.done = done
                })
            },

            // 清除所有已经完成的任务
            clearAllTodo() {
                this.todos = this.todos.filter((todo)=> {
                    return !todo.done
                })
            }
        },
    }
</script>

<style>
    /*base*/
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