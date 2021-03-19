<template>
    <section>
        <div class="base-input-container" :style="{width:width,margin:margin}" :class="[{'haveFocus':haveFocus,'disabled':disabled}]">
            <span class="label-container">{{label}}</span>
            <input v-model="boundValue" @focus="haveFocus = true" @blur="haveFocus = false" :disabled = "disabled" :type="type" class="input">
            <i class="el-icon-circle-close" style="margin-left: -16px;cursor:pointer;" @click="boundValue=''"
               v-show="boundValue"></i>
        </div>
        <div class="tip-container" :style="{width:width}" v-show="error">未通过检测</div>
    </section>

</template>

<script>
    export default {
        name: "baseInput",
        data() {
            return {
                boundValue: '',
                error: false,
                haveFocus:false
            }
        },
        props: {
            label: {
                type: String,
                default: '用户名',
            },
            width: {
                type: String,
                default: '360px'
            },
            type: {
                type: String,
                default: 'text'
            },
            margin:{
              type:String,
              default:''
            },
            rules: {
                type: String,
                default: ""
            },
            disabled: {
                type:Boolean,
                default:false
            }
        },
        watch: {
            boundValue(newVal) {
                this.$emit('input', newVal)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .base-input-container {
        height: 40px;
        border: 1px solid gray;
        border-radius: 4px;
        font-size: 16px;
        margin: 10px 0;
        box-sizing: border-box;
    }

    .tip-container {
        font-size: 10px;
        margin-top: -10px;
        color: red;
        text-align: center;
    }

    .input {
        background: none;
        outline: none;
        border: none;
        white-space: nowrap;
        box-sizing: border-box;
        line-height: 40px;
        width: 80%;
        font-size: 16px;
        padding: 0 10px;
        text-align: left;
        &:disabled{
            cursor: not-allowed;
        }
    }

    .disabled{
        background-color: 	#DCDCDC;
        cursor: not-allowed;
    }
    .haveFocus{
        border: 1px solid #00BFFF;
    }
</style>