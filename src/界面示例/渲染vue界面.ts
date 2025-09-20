import { createApp } from 'vue';
<<<<<<< HEAD
import app from './app.vue';

$(() => {
  createApp(app).mount('#app');
=======
import { createMemoryHistory, createRouter } from 'vue-router';
import App from './app.vue';
import Diary from './日记.vue';
import RoleplayOptions from './选择框.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/日记', component: Diary },
    { path: '/选择框', component: RoleplayOptions },
  ],
});
router.replace('/日记');

$(() => {
  createApp(App).use(router).mount('#app');
>>>>>>> abf5ab2721ef8aa1cccce26ac4d7afd734ec14b4
});
