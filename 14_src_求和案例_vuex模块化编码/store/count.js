// 求和相关的配置
const countOptions = {
    // 写了这个配置项，countAbout 才能被 mapState 找到这个名字
    // 这个不是必须写的，那就不能使用
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value);
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value);
            }, 500)
        }
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations 中 JIA 被调用了');
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations 中 JIAN 被调用了');
            state.sum -= value
        },
    },
    state: {
        sum: 0,  // 当前的和
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}

export default countOptions