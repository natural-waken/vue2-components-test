const { defineConfig } = require('@vue/cli-service')

// 这个文件是可以修改有些配置
module.exports = defineConfig({

  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  transpileDependencies: true,
  lintOnSave: false,  // 关闭语法检查
})
