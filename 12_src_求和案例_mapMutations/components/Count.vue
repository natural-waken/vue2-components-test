<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大 10 倍为 {{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>

        <!-- 要转换为数字型 -->
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>

        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>

    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,  // 用户选择的数字
            }
        },
        methods: {
            // 程序员亲自写方法
            // increment() {
            //     this.$store.commit('JIA', this.n);
            // },
            // decrement() {
            //     this.$store.commit('JIAN', this.n);
            // },

            // increment 就作为方法名了，JIA 就作为了 commit 那个名字了
            // 这种写法需要自己给上面这几个方法函数传参
            // 借助 mapMutations 生成对应的方法，方法中会调用commit去联系 mutations（对象写法）
            ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),

            // 借助 mapMutations 生成对应的方法，方法中会调用commit去联系 mutations（数组写法）
            // 数组写法这个名字只能是和 commit 那边一样名字，不能是 increment
            // ...mapMutations(['JIA', 'JIAN']),


            // ------------------------------------------------------------------
            // 程序员亲自写方法
            // incrementOdd() {
            //     this.$store.dispatch('jiaOdd', this.n);
            // },
            // incrementWait() {
            //     this.$store.dispatch('jiaWait', this.n);
            // },


            // 借助 mapActions 生成对应方法，方法中会调用 dispatch 去联系actions(对象写法)
            ...mapActions({ increment: 'jiaOdd', decrement: 'jiaWait' })

        },

        computed: {
            // 借助 mapState 生成计算属性，从 state 中读取数据（对象写法）
            // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),
            // 借助 mapState 生成计算属性，从 state 中读取数据（数组写法）
            ...mapState(['sum', 'school', 'subject']),

            // 借助 mapGetters 生成计算属性，从 getters 中读取数据（对象写法）
            // ...mapGetters({bigSum: 'bigSum'}),
            // 借助 mapGetters 生成计算属性，从 getters 中读取数据（数组写法）
            ...mapGetters(['bigSum']),

        },
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>