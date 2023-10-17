<template>
    <div class="category">
        <h3>{{title}}分类</h3>

        <!-- 这么写，就是把 games 传给了插槽的使用者 -->
        <!-- slot 给我们提供的一个方法 -->
        <!-- 这里名字必须一样，引号里面是要传的数据，冒号后面是属性名字 -->
        <slot :games="games" msg="hello">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
    </div>
</template>

<script>
    export default {
        name: 'category',
        props: ['title'],

        // 现在将数据放在这里
        data() {
            return {
                games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            }
        },
    }
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3 {
        text-align: center;
        background-color: orange;
    }
</style>