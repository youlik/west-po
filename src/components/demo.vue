<template>
    <section>
        <el-divider content-position="left">基础组件</el-divider>
        <base-button></base-button>
        <base-input></base-input>
        <base-select :select-list="selectList" ></base-select>
        <base-range></base-range>
        <base-table :list="list">
            <base-column label="名称" prop="name"></base-column>
            <base-column label="年龄" prop="age"></base-column>
            <base-column label="地址" prop="address"></base-column>
        </base-table>
        <el-divider content-position="left">可视化</el-divider>
        <path-map></path-map>
    </section>
</template>

<script>
    import BaseButton from "../basicComponent/baseButton";
    import BaseInput from "../basicComponent/baseInput";
    import pathMap from "../views/pathMap"
    import BaseSelect from "../basicComponent/base-select";
    import BaseRange from "../basicComponent/base-range";
    import BaseTable from "../basicComponent/base-table";
    import BaseColumn from "../basicComponent/base-column";

    export default {
        name: "demo",
        data() {
            return {
                list: [{name: "小季", age: "18", address: "翻斗花园A栋602"}, {name: "小季", age: "18", address: "翻斗花园A栋602"}],
                selectList: [{label: '张三', value: '1'}, {label: '李四', value: '2'}]
            }
        },
        components: {BaseColumn, BaseTable, BaseRange, BaseSelect, BaseInput, BaseButton, pathMap}
    }
</script>

<style scoped>
    .el-divider__text {
        background-color: transparent;
    }

</style>