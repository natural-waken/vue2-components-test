<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数, to 字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带params参数, to 对象写法 -->
                <!-- params 实现 to 对象形式不能写成 path   要写成 name -->
                <router-link :to="{
                    name: 'xiangqing',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{m.title}}
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>

        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: 'Message',
        data() {
            return {
                messageList: [
                    { id: '001', title: '消息001' },
                    { id: '002', title: '消息002' },
                    { id: '003', title: '消息003' },
                ]
            }
        },
    }
</script>

