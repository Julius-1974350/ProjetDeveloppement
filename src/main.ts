import { createApp } from 'vue'
// JS provenant du template
import './assets/js/apexchart.init.js'
import './assets/js/app.js'
import './assets/js/easy_background.js'
import './assets/js/fullcalendar.init.js'
import './assets/js/jsvectormap.init.js'
import './assets/js/plugins.init.js'
// JS librarie du template
import './assets/libs/apexcharts/apexcharts.min.js'
import './assets/libs/jsvectormap/js/jsvectormap.min.js'
import './assets/libs/jsvectormap/maps/world.js'
import './assets/libs/feather-icons/feather.min.js'
import './assets/libs/simplebar/simplebar.min.js'
// CSS import du template
import './assets/libs/tobii/css/tobii.min.css'
import './assets/libs/tiny-slider/tiny-slider.css'
import './assets/libs/@iconscout/unicons/css/line.css'
import './assets/libs/@mdi/font/css/materialdesignicons.min.css'
import './assets/libs/jsvectormap/css/jsvectormap.min.css'
import './assets/libs/simplebar/simplebar.min.css'
import './assets/libs/@iconscout/unicons/css/line.css'
import './assets/css/tailwind.css'

import App from './App.vue'
import router from './router'

import axios from 'axios'


const app = createApp(App)


app.use(router)

app.provide('axios', axios)

app.mount('#app')
  .$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
