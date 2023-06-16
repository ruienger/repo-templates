import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);

  return {
    resolve: {
      alias: {
        src: resolve(__dirname, '/src'),
      },
    },
    build: {
      rollupOptions: {
        // 默认登录、主页分为两个入口
        input: {
          main: resolve(__dirname, 'index.html'),
          login: resolve(__dirname, 'login.html'),
        },
      },
    },
    // 根据需要开启代理
    // server: {
    //   proxy: {
    //     [env.VITE_API_NAMESPACE]: {
    //       target: env.VITE_API_PROXY,
    //       changeOrigin: true,
    //     },
    //   },
    // },
    plugins: [
      vue(),
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
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
        dts: resolve(__dirname, 'types/components.d.ts'),
      }),
      Icons({
        // 实验性功能，引入 icon set 时自动安装它们
        autoInstall: true,
      }),
    ],
  };
});
