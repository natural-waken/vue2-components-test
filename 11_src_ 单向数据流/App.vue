<template>
    <div>
        <son :count="count" @changeCount="handleChange"></son>
    </div>
</template>

<script>
    import son from './components/son.vue'

    export default {
        data() {
            return {
                count: 9,
            }
        },

        components: {
            son,
        },

        methods: {
            handleChange(newCount) {
                this.count = newCount;
            }
        },
    }
</script>

<style>

</style>