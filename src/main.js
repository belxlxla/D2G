import './assets/scss/style.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js';
import SocketIO from 'vue-3-socket.io';
import io from 'socket.io-client';

// Socket.io 클라이언트 설정
const socketConnection = io('wss://www.daeng2go.com'); // 보안된 WebSocket 연결

const app = createApp(App);

app.use(router);

// Vue 3 애플리케이션에 Socket.io 설정 추가
app.use(new SocketIO({
  debug: true,
  connection: socketConnection,
}));

app.mount('#app');
