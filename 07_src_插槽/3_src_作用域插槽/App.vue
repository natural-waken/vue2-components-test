<template>
    <div class="container">

        <Category title="游戏">

            <!-- 解构赋值 -->
            <template slot-scope="{games}">
                <ul>
                    <li v-for="item,index in games" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="atguigu">

                <!-- 传过来的 atguigu 是一个对象，里面有传过来的所有数据，因为不止传过来一个数据 -->
                <!-- 这里还可以使用解构赋值，就不用一直 .  -->
                <ol>
                    <li style="color: red" v-for="item,index in atguigu.games" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="atguigu">
                <h4 v-for="item,index in atguigu.games" :key="index">{{item}}</h4>
            </template>
        </Category>

    </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name: 'App',
        components: {
            Category,
        },

        // 就是现在，我把数据不放在 App 里面了，放在 category 里面
        // data() {
        //     return {
        //         games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        //     }
        // },
    }
</script>

<style>
    .container,
    .foot {
        display: flex;
        justify-content: space-around;
    }

    h4 {
        text-align: center;
    }

    /* 这些样式可以写在这或者子组件 */
    img {
        width: 100%;
    }

    video {
        width: 100%;
    }
</style>

