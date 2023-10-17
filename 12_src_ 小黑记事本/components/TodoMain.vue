<template>
    <!-- 列表区域 -->
    <section class="main">
        <ul class="todo-list">
            <!-- 遍历渲染的标签 -->
            <li class="todo" v-for="(item, index) in list" :key="item.id">
                <div class="view">
                    <span class="index">{{ index + 1}}.</span> <label>{{ item.name }}</label>

                    <!-- 删除事件 -->
                    <button class="destroy" @click="handleDel(item.id)"></button>
                </div>
            </li>
        </ul>
    </section>

</template>

<script>
export default {
    props: {
        list: Array,
    },
    methods: {
        handleDel(id) {

            // 调用父组件删除事件   传过去 id 进行删除
            this.$emit('del', id)
        }
    },
}
</script>

<style scoped>
    
</style>