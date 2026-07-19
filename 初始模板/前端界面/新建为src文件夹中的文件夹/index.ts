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
>>>>>>> a4d60f52b8b1b0f872a80088ba7e339b0933eeb2
