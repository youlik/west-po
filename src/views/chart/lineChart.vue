<template>
    <div id="panMain" style="width: 400px;height: 400px">

    </div>
</template>

<script>
    let eCharts = require('echarts')
    export default {
        name: "lineChart",
        data(){
            return {
                option:null
            }
        },
        methods:{
            drawLine(){
                let chartDom = document.getElementById('panMain')
                let myChart = eCharts.init(chartDom)
                this.option = {
                    xAxis: {
                        type: 'category',
                        data: ['香蕉', '苹果', '双皮奶', '鸡排', '汉堡包', '辣条', '草莓']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                };

                this.option && myChart.setOption(this.option);
            }
        },
        mounted() {
            this.drawLine()
        }
    }
</script>

<style scoped>

</style>