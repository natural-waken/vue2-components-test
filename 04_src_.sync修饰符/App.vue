<template>
    <div class="app" v-show="this.real">
        <button @click="isShow = true">退出按钮</button>

        <!-- :visible.sync => 相当于 :visible + @update: visible -->
        <BaseDialog :visible.sync="isShow" :real="real"></BaseDialog>
    </div>
</template>

<script>
    import BaseDialog from "./components/BaseDialog.vue"
    export default {
        data() {
            return {
                isShow: false,
                real: true,
            }
        },
        methods: {

        },
        components: {
            BaseDialog,
        },
        mounted() {
            this.$bus.$on('really', (data)=> {
                console.log('我收到了数据', data);
                this.real = data
            })
        },
    }
</script>

<style>
    button {
        margin: 10px 10px;
    }
</style>