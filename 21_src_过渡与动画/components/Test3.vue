<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>

        <!-- 如果多个元素拥有过渡效果 -->
        <!-- <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷！</h1>
        </transition-group> -->

        <!-- 当然也可以这样写 -->
        <!-- <transition name="hello" appear>
            <div v-show="isShow">
                <h1>你好啊！</h1>
                <h1>尚硅谷！</h1>
            </div>
        </transition> -->


        <!-- 但是当两个 h1 运动方向相反互斥时，就不能包裹在一块了 -->
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷！</h1>
        </transition-group>


    </div>
</template>
<script>
    export default {
        name: 'Test',
        data() {
            return {
                isShow: true,
            }
        },
    }
</script>
<style scoped>
    h1 {
        background-color: orange;
    }

    /* 进入的起点  离开的终点 */
    .hello-enter,
    .hello-leave-to {
        transform: translateX(-100%);
    }

    /* 进入的终点 离开的起点 */
    .hello-ennter-to,
    .hello-leave {
        transform: translateX(0);
    }

    .hello-enter-active,
    .hello-leave-active {
        transition: 0.5s linear;
    }
</style>


