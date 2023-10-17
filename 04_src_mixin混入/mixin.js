// School Student 组件里面的共同东西可以放在混合 mixin.js
// 在那里的每一个配置项在混合里面都可以写

export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    // 将会输出两次  因为引入了两次  就相当于两个文件分别引入了一次
    mounted() {
        console.log('你好啊');
    }
}

export const mixin2 = {
    // 在这里配置数据
    data() {
        return {
            x: 100,
            y: 200,
        }
    },
}


