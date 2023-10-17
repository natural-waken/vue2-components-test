<template>
    <ul class="todo-main">
        <!-- li -->
        <!-- 把每一项的对象传过去 接收渲染数据 -->
        <!-- todos 虽然是 props 里面的  但是只要是 vc 身上的  在这里就可以使用 -->
        <MyItem v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj" 
                :checkTodo="checkTodo"
                :deleteTodo="deleteTodo">
        </MyItem>
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'

    export default {
        name: 'MyList',
        components: {
            MyItem,
        },
        props: ['todos', 'checkTodo', 'deleteTodo'],
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>