import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'

import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Select from 'primevue/select'
import Carousel from 'primevue/carousel'
import Paginator from 'primevue/paginator'
import Dialog from 'primevue/dialog'
import Tag from 'primevue/tag'
import DataView from 'primevue/dataview'
import ProgressSpinner from 'primevue/progressspinner'

import { VueQueryPlugin } from '@tanstack/vue-query'
import piniaPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.component('Avatar', Avatar)
app.component('ProgressSpinner', ProgressSpinner)
app.component('DataView', DataView)
app.component('Menubar', Menubar)
app.component('Card', Card)
app.component('Button', Button)
app.component('Dropdown', Select)
app.component('Carousel', Carousel)
app.component('Paginator', Paginator)
app.component('Dialog', Dialog)
app.component('Tag', Tag)

pinia.use(piniaPersistedState)
app.use(pinia)

app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')
