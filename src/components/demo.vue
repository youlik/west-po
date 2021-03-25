<template>
    <div class="demo-container">
        <div class="menu-container"></div>
        <div class="content-container"></div>
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
    import axios from 'axios'
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
        methods:{
            fetchData(){
                console.log(this.$axios)
                this.$axios.get("https://service-bihn1v5s-1258942312.gz.apigw.tencentcs.com/release/user").then(res=>{
                    console.log("访问成功");
                })
            }
        },
        created(){
            this.fetchData()
        },

        components: {
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

    .menu-container{
        float: left;
        width: 1rem;
        height: 6rem;
        border: 1px solid yellow;
    }

    .content-container {
        float: left;
        width: 4rem;
        height: 6rem;
        border: 1px solid blue;
    }
    .demo-container {
        background-color: #ffffff;
        height: 100%;
        width:100%;
    }

</style>