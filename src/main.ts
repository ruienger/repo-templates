import { createApp } from 'vue';
import router from 'src/router';
import store from 'src/store';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'src/style.css';
import App from 'src/App.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
