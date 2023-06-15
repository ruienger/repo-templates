import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { defineConfig, loadEnv } from 'vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');

  return {
    resolve: {
      alias: {
        src: resolve(__dirname, '/src'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          login: resolve(__dirname, 'login.html'),
        },
      },
    },
    server: {
      host: env.HOST,
      port: parseInt(env.PORT),
      // 根据后端api的命名空间作代理
      // proxy: {
      //   '': {
      //     target: env.BASE_PROXY,
      //     changeOrigin: true,
      //   },
      // },
    },
    plugins: [
      vue(),
      // 自动引入 插件，配合 element-plus 使用
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', 'vue-router'],
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: resolve(__dirname, 'types/autoImports.d.ts'),
      }),
      Components({
        dts: resolve(__dirname, 'types/components.d.ts'),
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
      }),
      // 自动安装引入了的但未安装的iconset包
      Icons({
        autoInstall: true,
      }),
    ],
  };
});
