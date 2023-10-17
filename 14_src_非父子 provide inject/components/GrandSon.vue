<template>
    <div class="grandSon">
        我是 GrandSon 组件
        {{ color }} - {{ userInfo.name }} - {{ userInfo.age }}
    </div>
</template>

<script>
    export default {
        // 这里面就写需要接收的数据，然后在上面就可以使用了
        inject: ['color', 'userInfo']
    }
</script>

<style scoped>
    .grandSon {
        width: 150px;
        height: 80px;
        padding: 10px;
        border: 3px solid #000;
        border-radius: 5px;
        font-size: 15px;
    }
</style>