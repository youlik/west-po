<template>
    <div class="base-table-container">
        <el-table :data="list" :height="height" :border="border" :stripe="stripe">
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
            }

        }
    }
</script>

<style scoped>

</style>