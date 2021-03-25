<template>
    <div class="demo-container">
        <div class="content-container">
            <div class="menu-header">按钮</div>
            <section class="flex-layout-row">
                <base-button label="主要按钮"></base-button>
                <base-button label="危险按钮" type="danger"></base-button>
                <base-button label="成功按钮" type="success"></base-button>
                <base-button label="禁用按钮" disabled></base-button>
            </section>

            <el-divider content-position="left">输入框</el-divider>
            <base-input></base-input>
            <base-icon icon-class="add"></base-icon>
            <el-divider content-position="left">选择</el-divider>
            <base-select :select-list="selectList"></base-select>
            <base-check></base-check>
            <el-divider content-position="left">评分</el-divider>
            <base-range></base-range>
            <el-divider content-position="left">表格</el-divider>
            <base-table :list="list" width="400px" height="400px">
                <base-column label="名称" prop="name"></base-column>
                <base-column label="年龄" prop="age"></base-column>
                <base-column label="地址" prop="address"></base-column>
            </base-table>
            <!--            <scroll-table></scroll-table>-->
            <el-divider content-position="left">可视化</el-divider>
        </div>

        <!--        <path-map></path-map>-->
    </div>
</template>

<script>
    import BaseButton from "../basicComponent/baseButton";
    import BaseInput from "../basicComponent/baseInput";
    import pathMap from "../views/pathMap"
    import BaseSelect from "../basicComponent/base-select";
    import BaseRange from "../basicComponent/base-range";
    import BaseTable from "../basicComponent/base-table";
    import BaseColumn from "../basicComponent/base-column";
    import BaseCheck from "../basicComponent/baseCheck";
    import ScrollTable from "../basicComponent/scrollTable";
    import BaseIcon from "../basicComponent/baseIcon";

    export default {
        name: "demo",
        data() {
            return {
                list: [{name: "小季", age: "18", address: "翻斗花园A栋602"}, {name: "小季", age: "18", address: "翻斗花园A栋602"}, {name: "小季", age: "18", address: "翻斗花园A栋602"}, {
                    name: "小季",
                    age: "18",
                    address: "翻斗花园A栋602"
                }, {name: "小季", age: "18", address: "翻斗花园A栋602"}, {name: "小季", age: "18", address: "翻斗花园A栋602"}, {name: "小季", age: "18", address: "翻斗花园A栋602"}, {name: "小季", age: "18", address: "翻斗花园A栋602"}],
                selectList: [{label: '张三', value: '1'}, {label: '李四', value: '2'}]
            }
        },
        components: {
            BaseIcon,
            ScrollTable,
            BaseCheck, BaseColumn, BaseTable, BaseRange, BaseSelect, BaseInput, BaseButton, pathMap}
    }
</script>

<style scoped>
    .el-divider__text {
        background-color: transparent;
    }

    .content-container {
        width: 600px;
        padding: 10px;
        margin: 0 auto;
    }

    .demo-container {
        background-color: #ffffff;
        height: 100%;
        margin: 0 auto;
    }

    .menu-header{
        text-align: left;
        padding: 10px 0;
        font-weight: 500;
    }

</style>