<template>
    <div class="app">
        <form action="">
            账号: <input v-model="username" type="text">

            密码: <input v-model="password" type="password">
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            // 方法一 收集表单数据，返回一个对象
            getFormData() {
                return {
                    account: this.username,
                    password: this.password,
                }
            },
            // 方法二 重置表单
            resetFormData() {
                this.username = ''
                this.password = ''
            },
        }
    }
</script>

<style scoped>
    .app {
        border: 2px solid #ccc;
        padding: 10px;
    }

    .app div {
        margin: 10px 0;
    }
</style>