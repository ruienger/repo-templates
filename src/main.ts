import { createApp } from 'vue';
import App from 'src/App.vue';
import store from 'src/store';
import router from 'src/router';

import 'src/style.css';
import 'element-plus/dist/index.css';
// 使用下面的 css 文件以启用深色模式
// import 'element-plus/theme-chalk/dark/css-vars.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
