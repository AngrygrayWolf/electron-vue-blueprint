<template>
  <div
    id="map-3d"
    v-on:click="winResize"
  >
    <v-chart
      class="map MapBox"
      :options="map"
      autoresize
    />
  </div>
</template>


<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import linedata from '../data/MapBox/one.json'
import 'echarts/lib/component/visualMap'
import 'echarts'
import 'echarts-gl'
// import MapboxStyle from '../data/MapBox/two.json'
let option = {
  baseOption: {
    timeline: {
      axisType: 'category',
      orient: 'vertical',
      autoPlay: true,
      inverse: true,
      playInterval: 300,
      left: null,
      right: 0,
      top: null,
      bottom: 50,
      width: 55,
      height: null,
      label: {
        normal: {
          textStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          textStyle: {
            color: '#aaa'
          }
        }
      },
      symbol: 'circle',
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        color: '#bbb',
        borderColor: '#777',
        borderWidth: 2
      },
      controlStyle: {
        normal: {
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      },
      data: []
    },
    title: {
      text: '北京人口分布24小时潮汐',
      textStyle: {
        color: '#fff',
        fontSize: 30
      },
      right: '5%'
    },

    visualMap: {
      show: false,
      calculable: true,
      realtime: false,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      },
      outOfRange: {
        colorAlpha: 0
      }

    },

    maptalks3D: {
      center: [116.368655, 39.917726],
      zoom: 9,
      pitch: 40,
      urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      // altitudeScale: 1,
      postEffect: {
        enable: true,
        FXAA: {
          enable: true
        }
      },
      light: {
        main: {
          intensity: 1,
          shadow: true,
          shadowQuality: 'high'
        },
        ambient: {
          intensity: 0.0
        },
        ambientCubemap: {
          texture: '/static/data-1491838644249-ry33I7YTe.hdr',
          exposure: 1,
          diffuseIntensity: 0.5,
          specularIntensity: 2
        }
      }
    },
    series: [{
      type: 'bar3D',
      shading: 'realistic',
      coordinateSystem: 'maptalks3D',
      barSize: 0.5,
      silent: true
    }]
  },
  options: [] // timeline所用的多个option存放处，读取数据后添加
}

let timeline = []
for (let n = 0; n < linedata.features.length; n++) { // 对数据中每天数据整理后添加到options中，以便timeline使用
  let timedata = linedata.features[n].gridChart_list
  let data = []
  let max = linedata.features[n].max
  for (let i = 0; i < timedata.length; i += 1) {
    // let _pheight = 1000
    let loncol = timedata[i].lon// 经度
    let latcol = timedata[i].lat// 纬度
    let _v = JSON.parse(timedata[i].values)
    let value = _v[0] + _v[1] + _v[2]// 数组中值相加
    let count = value / 2
    data.push({
      'value': [loncol, latcol, count]
    })
  }
  timeline.push(linedata.features[n].time)// 时间(0时到24时)

  option.options.push({

    visualMap: {
      max: max / 2
    },
    series: [{
      data: data
    }]
  })
}
option.baseOption.timeline.data = timeline

export default {
  name: 'MapD',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      map: option
    }
  },
  methods: {
    winResize: function (e) {
      // console.log(e)
      let t = document.querySelector('#map-3d > .map')
      t.className = 'max'
      let mask = document.querySelector('.mask-fade')
      mask.style.display = 'block'
    }
  }
}
</script>

<style>
</style>
