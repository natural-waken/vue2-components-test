<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- 第一种方法 isAll方法和点击事件同时使用 -->
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->

            <!-- 第二种方法 v-model 双向绑定 isAll 需要写成完整 get set 形式 因为点击全选要显示到数据上 -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: 'MyFooter',
        props: ['todos', 'checkAllTodo', 'clearAllTodo'],
        computed: {
            // 全部几个任务
            total() {
                return this.todos.length
            },

            // 完成了几个任务
            doneTotal() {
                // const x = this.todos.reduce((pre, current)=> {
                //     return pre + (current.done ? 1 : 0)
                // }, 0)
                // return x
                return this.todos.reduce((pre, current) =>
                    pre + (current.done ? 1 : 0)
                    , 0)
            },

            // 是否需要勾选
            // 这个简写是上面第一种方法
            // isAll() {
            //     // 首先要保证这两相等 其次要保证任务大于零
            //     return this.doneTotal === this.total && this.total > 0
            // }

            // 第二种方法需要完整写法
            isAll: {
                get() {
                    return this.doneTotal === this.total && this.total > 0
                },
                // 这个 value 就是上面全选框 checked
                set(value) {
                    this.checkAllTodo(value)
                }
            }
        },
        methods: {
            // 这个是上面第一种方法要使用
            checkAll(e) {
                this.checkAllTodo(e.target.checked)
            },

            // 清除所有任务
            clearAll() {
                this.clearAllTodo()
            }
        },
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>