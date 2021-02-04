<template>
    <section>
        <div class="base-input-container">
            <span class="label-container">{{label}}</span>
            <input v-model="boundValue" :type="type" class="input"></input>
        </div>
        <div class="tip-container">未通过检测</div>
    </section>

</template>

<script>
  export default {
    name: "baseInput",
    data(){
      return{
        boundValue:''
      }
    },
    props:{
      label:{
        type:String,
        default:'用户名',
      },
      type:{
        type:String,
        default: 'text'
      }
    },
    watch:{
      boundValue(newVal){
        this.$emit('input',newVal)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .base-input-container{
        height: 40px;
        border: 1px solid gray;
        border-radius: 4px;
        font-size: 16px;
        margin: 10px 0;
        box-sizing: border-box;
        &:focus{
            border: 1px solid yellow;
        }
    }

    .label-container{
        width: 20%;
        text-align: right;
        line-height: 40px;
    }

    .tip-container{
        font-size: 10px;
        margin-top: -10px;
        color: red;
        text-align: center;
    }

    .input{
        background:none;
        outline:none;
        border:none;
        white-space: nowrap;
        box-sizing: border-box;
        line-height: 40px;
        width: 80%;
        font-size: 16px;
        padding: 0 10px;
        text-align: left;

    }
</style>