<template>
    <div class="demo">
        <h2 class="title">学校名称：{{ name | mySlice }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷atguigu',
                address: '北京',
                x: 99,
            }
        },
    }
</script>

<!-- scoped 是局部的意思 就是说这个样式只在这个里面使用 别的要是有重名的也不能使用这个 -->
<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>