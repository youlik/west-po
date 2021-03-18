<template>
    <section class="base-select-container" :style="{width:width}">
        <span class="label-container">{{label}}</span>
        <div class="select-container-main">
            <input v-model="currentValue" class="input">
            <div>
                <ul class="base-select-ul" :class="{showOptions:!showOptions}">
                    <li v-for="item in selectList" class="select-dropdown-item" @click="selectChange(item)"
                        :key="item.value" :class="{selectOption:item.label===currentValue}">{{item.label}}
                    </li>
                </ul>
            </div>
        </div>
        <i class="el-icon-arrow-right" :class="{arrowDown:showOptions}" style="font-size: 20px;cursor: pointer"
           @click="showOptions=!showOptions"></i>
    </section>
</template>

<script>
    export default {

        name: "base-select",
        data() {
            return {
                showOptions: false,
                currentValue: ''
            }
        },
        methods: {
            selectChange(data) {
                this.currentValue = data.label
                this.showOptions = !this.showOptions
            }
        },
        props: {
            selectList: {
                type: Array,
                default: () => []
            },
            label: {
                type: String,
                default: '默认'
            },
            width: {
                type: String,
                default: "360px"
            }
        }
    }
</script>

<style scoped>
    .base-select-container {
        height: 40px;
        border-radius: 4px;
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
        border: 1px solid gray;
        box-sizing: border-box;
    }


    .base-select-ul {
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 10px;
        position: absolute;
        left: 0;
        background-color: #ffffff;
        border-radius: 0 0 4px 4px;
        top: 41px;
        z-index: 99999999;
    }

    .select-container-main {
        width: 100%;
        position: relative;
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        white-space: nowrap;
    }

    .showOptions {
        display: none;
    }

    .selectOption {
        background-color: #f5f7fa;
        color: #409eff;
    }

    .select-dropdown-item {
        padding: 5px;
        cursor: pointer;
    }

    .select-dropdown-item:checked {
        background-color: black;
    }

    .arrowDown {
        transform: rotate(90deg);
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

    }
</style>