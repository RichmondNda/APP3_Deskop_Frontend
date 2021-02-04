import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "./font/fontAwaSome.js"

import "tailwindcss/tailwind.css"


axios.defaults.withCredentials = true ;

axios.defaults.baseURL = 'http://localhost:8000';


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App).use(store).use(router).use(VueAxios, axios).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
