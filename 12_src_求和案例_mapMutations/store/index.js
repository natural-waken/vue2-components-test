// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 应用 Vuex 插件
Vue.use(Vuex)


// 准备 actions——用于响应组件中的动作
const actions = {
    // 第三步 actions 里面添加刚刚第二步方法
    // jia: function() {}  对象函数完整写法

    // 所以现在就不用这两个函数了
    // jia(context, value) {
    //     // context 是一个简易 store
    //     // 我们要自己添加 commit 方法，说明我们要干什么

    //     // 有个习惯 我们会把这里的名字改成大写字母，因为 mutations 里面很牛逼，它能直接操作 sum 数据
    //     context.commit('JIA', value);
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value);
    // },

    jiaOdd(context, value) {
        console.log('jiaOdd 被调用了');
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        console.log('jiaWait 被调用了');
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500)
    }
}

// 准备 mutations——用于操作数据（state）
const mutations = {

    // 这个里面才是直接改变数据
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
}

// 准备 getters—— 用于将数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 准备 state——用于存储数据
const state = {
    // 第一步 将数据放在 state 中
    sum: 0,  // 当前的和
    school: '尚硅谷',
    subject: '前端'
}


// 创建并暴露导出 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})



