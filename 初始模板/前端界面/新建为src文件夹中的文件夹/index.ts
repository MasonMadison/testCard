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
>>>>>>> 951ccd9ef4542130071c3067b09bef4651ce8128
