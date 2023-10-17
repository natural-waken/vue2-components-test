<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>

        <!-- 要转换为数字型 -->
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>

        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>

    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,  // 用户选择的数字
            }
        },
        methods: {
            increment() {
                // 第二步  dispatch 调用事件
                // this.$store.dispatch('jia', this.n);

                // 要是觉着 actions 没有什么逻辑，就不用 dispatch 了，直接在这里 commit 就相当于是直接去 mutations 里面
                this.$store.commit('JIA', this.n);
            },
            decrement() {
                this.$store.commit('JIAN', this.n);
            },
            incrementOdd() {
                this.$store.dispatch('jiaOdd', this.n);
            },
            incrementWait() {
                this.$store.dispatch('jiaWait', this.n);
            },
        },

    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>