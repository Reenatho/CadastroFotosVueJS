
<template>
    <div class='corpo'> 
        
        <meu-menu :rotas='routes'/>

        <transition name='pagina'>
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>

import { routes } from './components/routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

    components: {
        'meu-menu': Menu
    },

    data(){
        return{
            routes
        }
    }
}
 

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;700&display=swap');

    .corpo{
        font-family: 'Overpass', sans-serif;
        width: 96%;
        margin: 0 auto;
    }

   



    .pagina-enter, .pagina-leave-active{
        opacity: 0;


    }

    .pagina-enter-active, .pagina-leave-active{
        transition: 0.2s;

    }




   
</style>


