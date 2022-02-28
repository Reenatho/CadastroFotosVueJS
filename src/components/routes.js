import Cadastro from './cadastro/Cadastro.vue'
import Home from './home/Home.vue'

export const routes = [
    { path: '', component: Home, titulo: 'Home'},
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}

];