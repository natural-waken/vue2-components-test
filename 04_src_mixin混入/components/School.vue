<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    // 局部混合
    // 引入一个混合 mixin
    // import { mixin, mixin2 } from '../mixin'

    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京',
                x: 99,
            }
        },

        // 配置 mixins 里面可以放入多个混合
        // mixins: [mixin, mixin2]
    }
</script>