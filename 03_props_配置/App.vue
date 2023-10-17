<template>
    <div>
        <Student name="李四" gender="女" age="2" />
        <Student name="李四" gender="女" :age="2 + 1" />
        <Student name="李四" gender="女" :age="2" />
        <hr>
    </div>
</template>

<script>
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        components: {
            Student,
        },
    }
</script>

<style>

</style>