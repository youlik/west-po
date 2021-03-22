<template>
    <div class="base-icon-container">
        <svg class="icon" aria-hidden="true">
             <use xlink:href="iconName"></use>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "baseIcon",
        data(){
            return{
            }
        },
        methods:{
       
        },
        props:{
            iconName:{
                type:String,
                default:''
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .base-icon-container{
        display: flex;
        align-items: center;
    }

    .icon {
       width: 16px; height: 16px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

</style>