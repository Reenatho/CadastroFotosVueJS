<template>
    <button :class='estiloDoBotao' :type='tipo' @click='disparaAcao()'>{{ rotulo }}</button>
</template>

<script>
    export default {
        props: {
            tipo: {
                required: true,
                type: String,
            },

            rotulo: {
                required: true,
                type: String,
            },

            confirmacao: {
                type: Boolean,
            },

            estilo: {
                type: String,
            },

        },

        methods: {
            disparaAcao(){
                if(this.confirmacao){
                    if(confirm('Você deseja deletar a foto?')){
                        this.$emit('botaoAtivado');
                    }
                    return;
                }
               
                this.$emit('botaoAtivado')
                
            }
        },

        computed: {
            estiloDoBotao(){
                if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';
                if(this.estilo == 'perigo') return 'botao botao-perigo';
            }

        }
    }

</script>

<style>
    .botao{
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo{
        background-color: firebrick;
        color: #fff;
    }

    .botao-padrao{
        background-color: darkcyan;
        color: #fff;
    }
</style>