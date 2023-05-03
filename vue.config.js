const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  css: {
    loaderOption: {
      sass: {
        prependData: ' @import "@/assets/scss/styles.scss"; '
      }
    }
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mtuci-map/'
    : '/'
}

// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/styles.scss'),
      ],
    })
}