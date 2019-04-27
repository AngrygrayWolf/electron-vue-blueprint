<template>
  <div id="app">
    <div
      id="container"
      class="container"
    >
      <div
        id="output"
        class="container"
      >
      </div>
    </div>
    <div class="graph_main">
      <div class="left">
        <Polar />
        <LineD />
        <Radar />
      </div>

      <div class="center">
        <div class="graph_map">
          <ThinkGis />
          <MapD />
          <MainCountry />
          <TMap />
        </div>
      </div>
      <div class="right">
        <One />
      </div>
    </div>
    <div
      class="mask-fade"
      style="display:none"
      v-on:click="normalize"
    ></div>
  </div>
</template>

<script>
import Polar from './components/graph/Polar.vue'
import LineD from './components/graph/LineD.vue'
import One from './components/news/One.vue'
import Radar from './components/graph/Radar.vue'
import TMap from './components/graph/map/TMap.vue'
import ThinkGis from './components/graph/map/ThinkGis.vue'
import './js/index.js'
import MapD from './components/graph/map/Map3D.vue'
import MainCountry from './components/graph/map/MainCountry.vue'

export default {
  name: 'electron-vue',
  components: {
    Polar,
    LineD,
    One,
    Radar,
    TMap,
    ThinkGis,
    MapD,
    MainCountry
  },
  mounted () {
    this.autoResize()
    window.onresize = this.autoResize
  },
  methods: {
    autoResize: function () {
      let winHeight = 0
      if (window.innerHeight) {
        winHeight = window.innerHeight
      } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.documentElement.clientHeight
      }
      document.getElementById('app').style.height = winHeight + 'px'
    },

    normalize: function () {
      let t = document.querySelector('.max')
      t.className = 'echarts map'
      document.querySelector('.mask-fade').style.display = 'none'
    }
  }
}
</script>

<style>
body {
  background: #111118;
  margin: 0;
}
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
}
#app {
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: rgba(236, 255, 255, 1);
}
.graph_main {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
}

.echarts {
  min-height: 200px;
  height: 80%;
}
.left {
  margin-left: 20px;
  width: 22%;
  max-height: 100%;
  overflow: auto;
}

.center {
  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  /* flex-direction: row; */
  width: 50%;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  /* height: 50%; */
  margin: 0 -5px;
  height: 100%;
}

.right {
  float: right;
  /* width: 300px; */
  width: 22%;
  height: 100%;
  overflow: hidden;
  /* margin-right: 20px; */
}

.graph_map {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  height: 90%;
}

.graph_map > div {
  width: 50%;
  height: 50%;
}

.graph_map > div > .echarts {
  height: 100%;
}

.map {
  min-width: 200px;
  width: 100%;
  /* background-color: transparent; */
  border: 2px solid gray;
}

.max {
  background-color: #111118;
  opacity: 0.8;
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  width: 90% !important;
  height: 90% !important;
}

.mask-fade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  opacity: 0.8;
  background-color: gray;
}

/* CSS */
</style>
