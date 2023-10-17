<template>
    <div>
        <button>原生的按钮</button>
        <input type="text">

        <atguigu-row>
            <!-- atguigu-button 其实是个组件 -->
            <atguigu-button>默认按钮</atguigu-button>
            <atguigu-button type="primary">主要按钮</atguigu-button>
            <atguigu-button type="success">成功按钮</atguigu-button>
            <atguigu-button type="info">信息按钮</atguigu-button>
            <atguigu-button type="warning">警告按钮</atguigu-button>
            <atguigu-button type="danger">危险按钮</atguigu-button>
        </atguigu-row>

        <!-- 日期选择器 -->
        <atguigu-date-picker v-model="value1" type="date" placeholder="选择日期">
        </atguigu-date-picker>

        <!-- 按钮 -->
        <atguigu-row>
            <atguigu-button icon="el-icon-search" circle></atguigu-button>
            <atguigu-button type="primary" icon="el-icon-s-promotion" circle></atguigu-button>
            <atguigu-button type="success" icon="el-icon-check" circle></atguigu-button>
            <atguigu-button type="info" icon="el-icon-message" circle></atguigu-button>
            <atguigu-button type="warning" icon="el-icon-star-off" circle></atguigu-button>
            <atguigu-button type="danger" icon="el-icon-delete" circle></atguigu-button>
        </atguigu-row>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>