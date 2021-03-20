<template>
    <div class="mood-essay-container">
        <section class="top-container">
            <div class="simple-chart-container">
                美食在线监测平台
                <div style="font-size: 16px;text-align: center;padding: 5px">
                    <el-icon class="el-icon-time"></el-icon>{{time}}
                </div>
            </div>
            <div class="flag-tab-container" v-for="item in titleData">
                <span style="font-size: 40px;padding: 5px">¥</span>
                <div style="display: flex;flex-direction: column;text-align: left">
                    <span class="title-container">{{item.title}}
                </span>
                    <span class="single-number">{{item.price}}</span>
                </div>

            </div>
        </section>
        <section class="body-container">
            <div class="left-container">
                <div class="table-container">
                    <span style="float: left;font-size: 20px;color: #ffffff;padding: 10px">美食售价表</span>
                    <base-table :list="foodData" height="300px">
                        <base-column label="名称" prop="name"></base-column>
                        <base-column label="单价" prop="price"></base-column>
                        <base-column label="地址" prop="address"></base-column>
                    </base-table>
                </div>
                <div style="border:1px solid #55bcd4">
                    <span style="float: left;font-size: 20px;color: #ffffff;padding: 10px">美食销售额</span>
                    <line-chart></line-chart>
                </div>
            </div>
            <div class="main-container">
                <div class="detail-container">
                    <div style="font-size: 18px;color: white;padding: 10px;text-align: left">地区：{{addressData.name}}</div>
                    <div style="font-size: 18px;color: white;padding: 10px;text-align: left">
                        本地区年度销售额{{addressData.value}}(万元)
                    </div>
                </div>
                <path-map @addressData = "(data)=>addressData = data"></path-map>
            </div>
            <div class="right-container">
                <div style="border: 1px solid #55bcd4;height: 400px;margin-bottom: 30px">
                    <span style="float: left;font-size: 20px;color: #ffffff;padding: 10px">市场份额</span>
                    <pan-chart></pan-chart>
                </div>
                <div style="border: 1px solid #55bcd4;height: 400px">

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import timeLineImage from "../views/timeLineImage";
    import pathMap from "../views/pathMap"
    import BaseColumn from "../basicComponent/base-column";
    import BaseTable from "../basicComponent/base-table";
    import LineChart from "../views/chart/lineChart";
    import Weather from "./weather";
    import PanChart from "../views/chart/panChart";

    export default {
        name: "moodEssay",
        data() {
            return {
                timer: null,
                flag: true,
                titleData : [{title:"总销售额",price:1000},{title:"总订单量",price:80000},{title:"单日最高营业额",price:999},{title:"门店营业额",price:500000}],
                foodData:[{name:"周黑鸭",price:45,address:'中国'},{name:"苹果",price:45,address:'浙江'},{name:"周黑鸭",price:45,address:'中国'},{name:"香蕉",price:45,address:'印度'}],
                addressData:[]
            }
        },
        components: {PanChart, Weather, LineChart, BaseTable, BaseColumn, timeLineImage, pathMap},
        computed: {
            time: ()=>{
                let time = new Date().toDateString()
                return time
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .mood-essay-container {
        background-color: #ffffff;
        background: url("../../src/assets/bj.png");
        height: 1019px;
        overflow-y: hidden;
        background-size: 1920px 1080px;
        font-size: 16px;
    }

    .top-container {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
    }

    .body-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        height: 919px;
    }

    .left-container {
        width: 450px;
        height: 919px;
    }

    .right-container {
        width: 450px;
        height: 919px;
    }

    .main-container {
        width: 1000px;
        height: 919px;
        position: relative;
        /*display: flex;*/
        /*align-items: center;*/
    }

    .table-container {
        height: 400px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border:1px solid #55bcd4;
        box-sizing: border-box;
        margin-bottom: 30px;
        /*border-image-source: url("../../src/assets/borderBack1.jpg");*/
    }
    .flag-tab-container{
        display: flex;
        align-items: center;
        padding: 10px;
        width: 200px;
        font-size: 27px;
    }
    .simple-chart-container {
        font-size: 27px;
        width: 270px;
        padding: 10px;
        color: rgb(255, 255, 255);
        text-shadow: rgb(255 255 255) 0px 0px 31px;
        font-weight: bold;
        justify-content: center;
        text-align: center;
    }

    .title-container{
        font-size: 20px;
        color: #F37B1D !important;
    }

    .detail-container{
        width: 400px;
        height: 300px;
        border: 1px solid yellow;
        float: left;
        position: absolute;
        bottom: 80px;
        left: 20px;
    }
    .single-number{
        color:#42A5E9 !important;
        font-size: 32px;
    }
</style>