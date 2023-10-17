<template>
    <!-- 输入框 -->
    <header class="header">
        <h1>小黑记事本</h1>

        <!-- 点击回车或者按钮都会触发添加事件 -->
        <input @keyup.enter="handleAdd" placeholder="请输入任务" v-model="todoName" class="new-todo" />
        <button class="add" @click="handleAdd">添加任务</button>
    </header>

</template>

<script>
    export default {
        data() {
            return {
                todoName: '',
            }
        },
        methods: {
            handleAdd() {
                if(this.todoName.trim() === '') {
                    alert("任务名称不能为空")
                    return 
                }

                // 传过来的事件名  子组件向父组件传递新添加的数据
                this.$emit('add', this.todoName)
                this.todoName = ''
            }
        },
    }
</script>

<style scoped>

</style>
