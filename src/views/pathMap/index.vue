<template>
    <div>
        <div id="map-wrap" style="height: 500px">

        </div>
    </div>
</template>
<script>
  // import echarts from 'echarts'
  let eCharts  = require('echarts')
  export default {
    name: "index",
    data() {
      return {
        listData:[]
      }
    },
    methods: {
          createMap() {
        //     console.log(eCharts)
        // let mapChart = eCharts.init(document.getElementById("map-wrap"))
        // let option = {
        //   title: {
        //     text: '中国地图',
        //     left: 'center'
        //   },
        //   series: [{
        //     name: '中国',
        //     type: 'map',
        //     mapType: 'HK',
        //     aspectScale: 0.75,
        //     zoom: 1.2,
        //     itemStyle: {
        //       normal: {label: {show: true}},
        //       emphasis: {label: {show: true}}
        //     },
        //     data: [ {name: '中西区', value: 20057.34},
        //       {name: '湾仔', value: 15477.48},
        //       {name: '东区', value: 31686.1},
        //       {name: '南区', value: 6992.6},
        //       {name: '油尖旺', value: 44045.49},
        //       {name: '深水埗', value: 40689.64},
        //       {name: '九龙城', value: 37659.78},
        //       {name: '黄大仙', value: 45180.97},
        //       {name: '观塘', value: 55204.26},
        //       {name: '葵青', value: 21900.9},
        //       {name: '荃湾', value: 4918.26},
        //       {name: '屯门', value: 5881.84},
        //       {name: '元朗', value: 4178.01},
        //       {name: '北区', value: 2227.92},
        //       {name: '大埔', value: 2180.98},
        //       {name: '沙田', value: 9172.94},
        //       {name: '西贡', value: 3368},
        //       {name: '离岛', value: 806.98}]
        //   }]
        // }
        // mapChart.setOption(option)

      },
      // fetchData(){
      //       axios.get('https://www.runoob.com/try/ajax/json_demo.json').then(res=>{
      //         console.log(res)
      //       })
      // }
    },
    mounted() {
      this.createMap()
    }
  }
</script>

<style scoped>

</style>