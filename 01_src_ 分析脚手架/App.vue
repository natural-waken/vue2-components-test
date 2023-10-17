<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <SchooL></SchooL>
        <StudenT></StudenT>

        <!-- 这种写法在脚手架里不会出错 非脚手架里会出错 -->
        <SchooL />
    </div>
</template>

<script>
    // 引入组件
    import SchooL from './components/SchooL'
    import StudenT from './components/StudenT'

    export default {
        name: 'App',
        // 注册组件
        components: {
            SchooL: SchooL,
            StudenT: StudenT,
        }
    }
</script>

<style>

</style>