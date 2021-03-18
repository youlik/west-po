<template>
    <div class="base-table-container">
        <el-table :data="list" :height="height" :border="border" :width="width" :stripe="stripe">
            <slot></slot>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "base-table",
        data(){
            return{

            }
        },
        props:{
            list:{
                type:Array,
                default:()=>[]
            },
            height:{
                type:String,
                default:'500px'
            },
            border:{
                type:Boolean,
                default:true
            },
            stripe:{
                type:Boolean,
                default:false
            },
            width:{
                type:String,
                default:"400px"
            }

        }
    }
</script>

<style lang="scss" scoped>
    .base-table-container{
    }
    /*/deep/.el-table__body-wrapper{*/
    /*    background-color: #11476b !important;*/
    /*}*/
    /*/deep/.el-table__header-wrapper{*/
    /*    background-color: #11476b !important;*/
    /*}*/
    /*/ddep/ .el-table-td{*/
    /*    color: white !important;*/
    /*}*/
</style>