import { createApp } from 'vue';
import store from 'src/store';
import 'element-plus/dist/index.css';
import App from 'src/Login.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');
