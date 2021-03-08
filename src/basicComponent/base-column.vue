<template>
    <div>
        <el-table-column :label="label" :prop="prop">
            <slot></slot>
        </el-table-column>
    </div>
</template>

<script>
    export default {
        name: "base-column",
        props:{
            label:{
                type:String,
                default:""
            },
            type:{
                type:String,
                default:""
            },
            prop:{
                type:String,
                default:""
            },
            width:{
                type:String,
                default:""
            }
        }
    }
</script>

<style scoped>

</style>