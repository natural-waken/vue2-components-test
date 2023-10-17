<template>
    <div class="SonA">
        我是 SonA 组件
        <GrandSon></GrandSon>
    </div>
</template>

<script>
    import GrandSon from './GrandSon.vue'
    export default {
        components: {
            GrandSon,
        }
    }
</script>

<style scoped>
    .SonA {
        width: 200px;
        height: 200px;
        padding: 10px;
        margin-top: 10px;
        border: 3px solid #000;
        border-radius: 5px;
        font-size: 20px;
    }
</style>