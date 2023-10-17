<template>
    <!-- 组件的结构 template 标签是不参与结构编译的 -->
    <div class="demo">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
    
</template>

<script>
    // 组件交互相关代码（数据，方法等等）
    // 所谓的交互 就是指这个组件包括的 data methods watch computed

    // 完整写法
    // const SchooL = Vue.extend({
    //     data() {
    //         return {
    //             schoolName: '尚硅谷',
    //             address: '北京',
    //         }
    //     },
    //     methods: {
    //         showX() {
    //             console.log(this.x);
    //         }
    //     },
    // })
    // export default School  // 默认暴露写法  我们一般会使用这个写法
    // export 


    // 简写  Vue.extend 可以简写
    export default {
        name: 'SchooL',
        data() {
            return {
                schoolName: '尚硅谷',
                address: '北京',
            }
        },
        methods: {
            showX() {
                console.log(this.x);
            }
        },
    }


</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>