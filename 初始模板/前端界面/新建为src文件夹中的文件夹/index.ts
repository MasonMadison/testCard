<<<<<<< HEAD
import './index.scss';
=======
import { createApp } from 'vue';
import App from './App.vue';

$(() => {
  const app = createApp(App).use(createPinia());
  app.mount('#app');
  $(window).on('pagehide', () => app.unmount());
});
>>>>>>> ef49cc74019348a1696eda4d988d4f4ddc0d1b9b
