import { createApp } from 'vue'
import './style.css'
import 'vant/es/toast/style';
import App from './App.vue'
import { Calendar } from "vant";
import router from "./routes/index";

const app = createApp(App);
app.use(router);
app.use(Calendar);

app.mount('#app');
