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
                let geoCoordMap = {
                    '海门': [121.15, 31.89],
                    '鄂尔多斯': [109.781327, 39.608266],
                    '招远': [120.38, 37.35],
                    '舟山': [122.207216, 29.985295],
                    '齐齐哈尔': [123.97, 47.33],
                    '盐城': [120.13, 33.38],
                    '赤峰': [118.87, 42.28],
                    '青岛': [120.33, 36.07],
                    '乳山': [121.52, 36.89],
                }
                let mapData = [
                    {name: "海口", value: 89},
                    {name: "鄂尔多斯", value: 98},
                    {name: "招远", value: 15},
                    {name: "舟山", value: 70},
                    {name: "齐齐哈尔", value: 56},
                    {name: "盐城", value: 77},
                    {name: "赤峰", value: 200},
                    {name: "青岛", value: 99},
                    {name: "乳山", value: 80},
                ]
                let lineData = [
                    {
                        coords: [
                            [118.87, 42.28],  // 起点
                            [109.781327, 39.608266]   // 终点
                        ]
                    },
                    {
                        coords: [
                            [118.87, 42.28],  // 起点
                            [121.15, 31.89]   // 终点
                        ]
                    },
                    {
                        coords: [
                            [118.87, 42.28],  // 起点
                            [122.207216, 29.985295]   // 终点
                        ]
                    },
                    {
                        coords: [
                            [118.87, 42.28],  // 起点
                            [109.781327, 39.608266]   // 终点
                        ]
                    },
                    {
                        coords: [
                            [118.87, 42.28],  // 起点
                            [120.33, 36.07]  // 终点
                        ]
                    },
                ]

                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };
                eCharts.registerMap('浙江', ZheJiang)
                let mapChart = eCharts.init(document.getElementById("map-wrap"))
                let option = {
                    geo: {
                        map: '浙江',
                        regions: [{
                            name: '温州',
                            selected: true,
                        }],
                        zoom: 1.2,

                        roam: false,
                        backgroundColor: '',
                        label: {
                            show: true,
                            color: '#0ee3f8'
                        },

                        emphasis: {
                            show: true,
                            color: '#0ee3f8'
                        },
                        itemStyle: {
                            areaColor: '#1c3448',
                            borderColor: '#4c687f',

                        },
                        tooltip: {
                            show:false,
                            formatter: function (params) {
                                return `<div class=chartLabel>
              <div class=title>${params.name}</div>
            </div>`
                            }

                        }
                    },
                    series: [
                        {
                            name: '销售额',            // series名称
                            type: 'scatter',          // series图表类型
                            coordinateSystem: 'geo',  // series坐标系类型
                            data: convertData(mapData),  // series数据内容
                            legendHoverLink: true,
                            //控制显示文本
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            //series样式
                            itemStyle: {
                                normal: {
                                    color: '#ddb926'
                                }
                            },
                        },
                        {
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData.sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 6)),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            encode: {
                                value: 2
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            },
                            zlevel: 1
                        },
                        {
                            type: "lines",
                            coordinateSystem: "geo",
                            symbol: ['none', 'arrow'],
                            symbolSize: 10,
                            data: lineData,
                            hoverAnimation: true,
                            effect:{
                              show:true,
                                symbol: "arrow"
                            },
                            lineStyle: {
                                normal: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(111, 113, 76, 1)' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: 'rgba(255, 255, 134, 1)'  // 100% 处的颜色
                                        }],
                                        global: false // 缺省为 false
                                    },
                                    width: 5,
                                    type: "dashed",
                                    opacity: 0.6,
                                    curveness: -0.5
                                },


                            },

                        }
                    ],

                    tooltip: {
                        show: true,
                        trigger: 'item',
                    }
                }
                mapChart.setOption(option)
                mapChart.on('click', (data) => {
                    data.data && this.$emit('addressData', {
                        name: data.data.name,
                        value: data.data.value[2],
                    })
                })


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