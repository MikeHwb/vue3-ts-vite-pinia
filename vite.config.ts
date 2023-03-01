import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// // 支持jsx语法
// import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// // setup下支持name属性
// import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// // 消息及时通知
// import { webUpdateNotice } from '@plugin-web-update-notification/vite'
// 自动导包
import AutoImport from 'unplugin-auto-import/vite'
// 自动导入组件
import Components from 'unplugin-vue-components/vite'
// elementplus处理
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// // icon插件及处理
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带短横线的标签名都视为自定义元素(警告信息)
          isCustomElement: tag => tag.startsWith('iconify-icon')
        }
      }
    }),
    // vueJsx(),
    // VueSetupExtend(),
    // webUpdateNotice({
    //   versionType: 'build_timestamp',
    //   logVersion: true,
    //   injectFileBase: '/'
    //   // hiddenDismissButton: true
    // }),
    // // 自动导入
    AutoImport({
      // 导入的模块
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      // 输出路径
      dts: './src/presets/types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
      // , IconsResolver()
      // eslint对导入包校验
      eslintrc: {
        enabled: false,
        filepath: './src/presets/eslint/eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      // 组件输出路径
      dts: './src/presets/types/components.d.ts',
      resolvers: [ElementPlusResolver()],
      // , IconsResolver({ prefix: false, enabledCollections: ['ep', 'mdi', 'fa'] })
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
    })
    // Icons({ autoInstall: true, defaultStyle: 'fontSize: 16px;' })
  ],
  resolve: {
    // 别名
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'static')
    },
    // 支持的文件
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    // css预处理
    preprocessorOptions: {
      scss: {
        // 全局引入scss变量
        additionalData: '@use "./src/assets/css/global.scss" as *;'
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 8002,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://oa.365you.com/',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
