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
        name: "mingDialog",
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

<style scoped>

</style>