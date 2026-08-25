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
>>>>>>> bc44abea1c2f7980dd9a2d9b909b4ad64bc8bdee
