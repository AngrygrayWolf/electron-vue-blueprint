<template>
  <div id="app">
    <div id="container" class="container">
    <div id="output" class="container">
    </div>
  </div>
    <div class="graph_main">
      <div class="left">
        <Polar/>
        <LineD/>
        <Radar/>
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
        <One/>
      </div>
    </div>
  
  </div>
</template>

<script>
import Polar from './components/graph/Polar.vue'
import LineD from './components/graph/LineD.vue'
import One from './components/news/One.vue'
import Radar from './components/graph/Radar.vue'
import TMap from './components/graph/TMap.vue'
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
  background-color: transparent;
  color:rgba(236,255,255,1);
}
  .graph_main {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
  }

.left {
  margin-left: 20px;
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
}

.right {
  float: right;
  width: 300px;
  height: 100%;
  /* margin-right: 20px; */
}

  .graph_map {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .map {
  width: 600px;
  background-color: transparent;
  border: 2px solid gray;
}


  /* CSS */
</style>
