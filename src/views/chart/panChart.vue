<template>
    <div id="main" style="width: 400px;height: 400px">

    </div>
</template>

<script>
    let eCharts = require('echarts')
    export default {
        name: "panChart",
        data(){
            return {
                option:null
            }
        },
        methods:{
            drawChart(){
                let chartDom = document.getElementById('main')
                let myChart = eCharts.init(chartDom)
                this.option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} : {c} ({d}%)'
                    },
                    legend: {
                        bottom: 10,
                        left: 'center',
                        data: ['九九香', '巴巴美食', '呱呱瓜子', '林林锅巴', '大叔粉肠']
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '65%',
                            center: ['50%', '50%'],
                            selectedMode: 'single',
                            data: [
                                {
                                    value: 150,
                                    name: '巴巴美食',
                                },
                                {
                                    value: 888,
                                    name: '呱呱瓜子',
                                },
                                {
                                    value: 750,
                                    name: '林林锅巴',
                                },
                                {
                                    value: 1548,
                                    name: '九九香',
                                },
                                {
                                    value: 2400,
                                    name: '大叔粉肠',
                                },
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                this.option && myChart.setOption(this.option);
            }
        },
        mounted() {
            this.drawChart()
        }
    }
</script>

<style scoped>

</style>