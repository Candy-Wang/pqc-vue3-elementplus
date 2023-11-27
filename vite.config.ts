import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    // 使用路径别名时想要省略的后缀名
    extensions: ['.js', '.ts'],
  },
  server: {
    proxy: {
      'apiPrefix': {
        // 所要代理的目标地址
        target: 'http://10.10.01.1',
        secure: false,
        changeOrigin: true,
        // 重写传过来的path路径
        rewrite: (path) => path.replace(/^\/apiPrefix/, '')
      }
    }
  }
})
