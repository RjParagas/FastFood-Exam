import './assets/main.css'
import './assets/framework7-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3StarRatings from "vue3-star-ratings";

import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue with helper to register all components
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import 'framework7/css/bundle';

Framework7.use(Framework7Vue);

const app = createApp(App)

app.component("vue3-star-ratings", vue3StarRatings);

registerComponents(app);

app.use(router)

app.mount('#app')
