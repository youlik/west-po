<template>
    <div class="base-button-container" :class="[{'disabled':disabled}]" :style="{'margin':margin}">
        <button style="width: 100%;height: 100%" @click="$emit('click')" :class="[type,'base']" :disabled="disabled">
            <span>{{label}}</span>
        </button>
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
        type:{
          type:String,
          default:'primary'
        },
        disabled:{
            type:Boolean,
            default:false
        },
        margin:{
            type:String,
            default:"5px"
        }
    },
    data(){
      return{

      }
    },

  }
</script>

<style lang="scss" scoped>
    .base-button-container{
        height: 40px;
        width: 98px;
        color: #ffffff;
        font-size: 16px;
        border-radius: 4px;
    }

    .base{
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        text-align: center;
        color: white;
        z-index: 99999;
        border: 1px solid #dcdfe6;

    }

    .disabled{
        background-color:#DCDCDC;
        cursor: not-allowed;
    }

    .primary{
        background-color: $blue-1;
        &:hover{
            background-color: $blue-1;
            border-color: $blue-1;
        }
        &:active{
            background-color: $blue-2;
        }

        &:disabled{
            background-color:#DCDCDC;
            border: 1px solid #ebeef5;
            cursor: not-allowed;
        }
    }

    .danger{
        background-color: $red-1;
        &:hover{
            background-color: $red-1;
            border-color:$red-1;
        }
        &:active{
            background-color: $red-2;
        }

        &:disabled{
            background-color:#DCDCDC;
            border: 1px solid #ebeef5;
            cursor: not-allowed;
        }
    }

    .success{
        background-color: $green-1;
        &:hover{
            background-color: $green-1;
            border-color:$green-1;
        }
        &:active{
            background-color: $green-2;
        }

        &:disabled{
            background-color:#DCDCDC;
            border: 1px solid #ebeef5;
            cursor: not-allowed;
        }
    }
</style>