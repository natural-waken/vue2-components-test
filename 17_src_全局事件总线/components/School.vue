<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
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
            }
        },
        mounted() {
            // console.log('School', this);

            // 绑定事件
            this.$bus.$on('hello', (data)=> {
                console.log('我是School组件，收到了数据',  data);
            })
        },

        beforeDestroy() {
            // 销毁之前解绑事件
            this.$bus.$off('hello')
        },
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>

