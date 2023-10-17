<template>
    <div>
        <button @click="handleSub">-</button>
        <span>{{ count }}</span>
        <button @click="handleAdd">+</button>
    </div>
</template>

<script>
    export default {
        props: ['count'],
        methods: {
            handleAdd() {
                this.$emit('changeCount', this.count + 1)
            },
            handleSub() {
                this.$emit('changeCount', this.count - 1)
            },
        }
    }
</script>

<style scoped>
    button {
        width: 50px;
        height: 50px;
        margin: 10px 20px;
        font-size: 30px;
    }
    span {
        font-size: 30px;
    }
</style>