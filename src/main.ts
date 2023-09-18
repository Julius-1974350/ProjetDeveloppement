import { createApp } from 'vue'
import './style.css'
import './assets/js/apexchart.init.js'
//import './assets/js/app.js'
import './assets/js/easy_background.js'
import './assets/js/fullcalendar.init.js'
import './assets/js/jsvectormap.init.js'
import './assets/js/plugins.init.js'

import App from './App.vue'
import router from './router'

import axios from 'axios'


const app = createApp(App)


app.use(router)

app.provide('axios', axios)

app.mount('#app')
  .$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
