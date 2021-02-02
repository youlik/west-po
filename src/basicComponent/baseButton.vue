<template>
    <div class="base-button-container">
        <button style="width: 100%;height: 100%">{{label}}</button>
    </div>
</template>

<script>
  export default {
    name: "base-button",
    props:{
        label:{
          type:String,
          default:'确认'
        },
        btnType:{
          type:String,
          default:'primary'
        }
    },
    data(){
      return{

      }
    },

  }
</script>

<style scoped>
    .base-button-container{
        height: 40px;
        width: 98px;
        color: #ffffff;
        font-size: 16px;
    }
</style>