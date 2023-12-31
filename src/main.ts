import { createApp } from 'vue'
import router from './router/index';
import './style.css'
import 'element-plus/dist/index.css';
import App from './App.vue'


createApp(App)
    .use(router)
    .mount('#app');
