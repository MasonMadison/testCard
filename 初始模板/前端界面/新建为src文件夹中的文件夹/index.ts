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
>>>>>>> e07e4847e8577cd53101e27231abf7ad096e7318
