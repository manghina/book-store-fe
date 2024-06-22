import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from "./router";
import axios from 'axios';

const app = createApp(App);

axios.defaults.baseURL = 'https://127.0.0.1:8000';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

app.config.globalProperties.$axios = axios;

app.use(router).mount('#app');