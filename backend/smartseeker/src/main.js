import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Embed from 'v-video-embed'

library.add(faLinkedin)
library.add(faGithub)

createApp(App).use(router, VueAxios, axios, Embed).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
