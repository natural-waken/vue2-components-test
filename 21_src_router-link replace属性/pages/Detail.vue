<template>
    <ul>
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
        <!-- <li>a: {{a}}</li>
        <li>b: {{b}}</li> -->
    </ul>
</template>

<script>
    export default {
        name: 'Detail',

        // 第一种写法
        // props: ['a', 'b'],

        // 第二种写法
        props: ['id', 'title'],
        // computed: {
        //     id() {
        //         return this.$route.params.id
        //     },
        //     title() {
        //         return this.$route.params.title
        //     },
        // },
    }
</script>

