import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from "./router";
import axios from 'axios';
import "./assets/css/font-awesome.min.css";

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost/book-store/public';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
app.config.globalProperties.$axios = axios;

app.use(router).mount('#app');