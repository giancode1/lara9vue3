// import './bootstrap';

// require('./bootstrap');

import App from './App.vue'
import {createApp} from 'vue'

import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App);

app.use(PrimeVue)
app.component('Button', Button);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.mount("#app")
