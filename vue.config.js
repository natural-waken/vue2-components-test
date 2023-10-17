module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        }
    },
    // transpileDependencies: true,
    lintOnSave: false,  // 关闭语法检查

    // 开启代理服务器
    // 方式一
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },

    // 方式二
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { "^/atguigu": '' },
                ws: true,  // 由于支持 websocket
                changeOrigin: true  // 由于控制请求头中的 host 值
            },

            // 要配置多个代理
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { "^/demo": '' },
                ws: true, 
                changeOrigin: true 
            },
        }
    }
}





