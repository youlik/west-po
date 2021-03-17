<template>
    <div>
            <div id="map-wrap" style="height: 850px;width:1000px">
        </div>
    </div>
</template>

<script>
    // import echarts from 'echarts'
    import axios from 'axios'

    const ZheJiang = require('../../../public/china.json')
    let eCharts = require('echarts')
    export default {
        name: "index",
        data() {
            return {
                listData: []
            }
        },
        methods: {
            createMap() {
                console.log(ZheJiang)
                eCharts.registerMap('浙江', ZheJiang)
                let mapChart = eCharts.init(document.getElementById("map-wrap"))
                let option = {
                    series: [{
                        name: '浙江',
                        type: 'map',
                        map: '浙江',
                        zoom:1.5,
                        top:'250',
                        label: {
                            show: true,
                            color: '#0ee3f8'
                        },
                        emphasis:{
                            show:true,
                            color: '#0ee3f8'
                        },
                        itemStyle: {
                            areaColor: '#1c3448',
                            borderColor:'#4c687f',

                        },

                        tooltip: {
                            formatter: function (params) {
                                return `<div class=chartLabel>
              <div class=title>${params.name}</div>
            </div>`
                            }

                        }
                    }],

                    tooltip: {
                        show: true,
                        trigger: 'item'
                    }
                }
                mapChart.setOption(option)
                mapChart.on('click', (data) => {
                    console.log(data)
                })
                console.log(mapChart)


            },
        },
        created() {

        },
        mounted() {
                this.createMap()
        }
    }
</script>

<style scoped>

</style>