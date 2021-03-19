<template>
    <div class="base-check-container">
        <div class="title">{{label}}</div>
        <input type="checkbox"  :checked="currentCheck" @change="changeChecked" class="base-check">
    </div>
</template>

<script>
    export default {
        name: "baseCheck",
        data(){
            return{
                currentCheck:false
            }
        },
        methods:{
          changeChecked(){
              this.$emit('checked',this.currentCheck)
          }
        },
        props:{
            label:{
                type:String,
                default:"单选框"
            },
            checked:{
                type:Boolean,
                default:false
            }
        },
        created() {
            this.currentCheck = this.checked
        }
    }
</script>

<style lang="scss" scoped>
    .base-check-container{
        display: flex;
        align-items: center;
    }

    .title{
        padding: 10px;
    }
    .base-check{
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: 1px solid black;
        cursor: pointer;
    }

</style>