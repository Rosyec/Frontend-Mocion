import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'

import Menubar from 'primevue/menubar'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Carousel from 'primevue/carousel'
import Paginator from 'primevue/paginator'
import Dialog from 'primevue/dialog'
import Tag from 'primevue/tag'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.component('Menubar', Menubar)
app.component('Card', Card)
app.component('Button', Button)
app.component('Dropdown', Dropdown)
app.component('Carousel', Carousel)
app.component('Paginator', Paginator)
app.component('Dialog', Dialog)
app.component('Tag', Tag)

app.use(createPinia())
app.use(router)

app.mount('#app')
