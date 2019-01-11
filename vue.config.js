const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}


module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/',
  transpileDependencies: ['vuex-module-decorators'],
  pwa: {
    name: 'vue-typescript-admin-template'
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'NODE': resolve('node_modules'),
        '@views': resolve('src/views'),
        '@pic': resolve('src/assets/images'),
        '@styles': resolve('src/assets/styles'),
        '@utils': resolve('src/utils'),
        '@api': resolve('src/api'),
        '@components': resolve('src/components')
      }
    }
  },
  productionSourceMap: false
}
