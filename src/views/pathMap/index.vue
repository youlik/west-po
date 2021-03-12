<template>
    <div>
        <div id="map-wrap" style="height: 500px;width: 560px">
        </div>
    </div>
</template>

<script>
  // import echarts from 'echarts'
  import axios from 'axios'

  const ZheJiang = require('../../../public/zhejiang.json')
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
          title: {
            text: '地图',
            left: 'center'
          },
          geo:{
            map:'浙江',
            regions: [{
              name: '温州',
              selected: true,
            }],
          },
          backgroundColor:'#FFFFFF',
          series: [{
            name: '浙江',
            type: 'map',
            map: '浙江',
            label: {
              show: true,
              color: 'black'
            },
            itemStyle: {
              areaColor: 'lightBlue'
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
      this.$nextTick(() => {
        this.createMap()

      })
    }
  }
</script>

<style scoped>

</style>