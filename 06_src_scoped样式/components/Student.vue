<template>
    <div class="demo">
        <h2 class="title">学生姓名：{{ name }}</h2>
        <h2 class="atguigu">学生性别：{{ gender }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                gender: '男',
            }
        },

    }
</script>

<!-- <style scoped>
    .demo{
        background-color: orange;
    }
</style> -->


<!-- 不写 lang 默认是 css -->
<style lang="less" scoped>
    .demo {
        background-color: orange;

        .atguigu {
            font-size: 40px;
        }
    }
</style>