<template>
    <div>
        <el-dialog
                :title="title"
                :visible.sync="flag"
                width="30%"
        >
            <slot></slot>
        </el-dialog>
    </div>

</template>

<script>
  export default {
    name: "baseDialog",
    props:{
      title:{
        type:String,
        default:''
      },
      flag:{
        type:Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
    /deep/.el-dialog__body{
        /*filter:blur(10px);*/
        /*-webkit-filter:blur(10px);*/
        /*-moz-filter:blur(10px);*/
        /*-ms-filter:blur(10px);*/
        /*-o-filter:blur(10px);*/
        background: url("../assets/background.jpg");
    }
    /deep/.el-dialog__title{

    }
</style>