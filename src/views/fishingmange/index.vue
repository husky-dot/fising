<!-- -->
<template>
  <div class="fishing-main-container">
    <div class="left-nav-wrapper">
      <div class='left-nav-list-wrapper'>
        <div class='left-nav-item'>
          <img :src="require('@pic/bg.png')">
          <div class="item-content">
            <div class='content-title'>广东南沙草鱼养殖基地</div>
            <div class="content-desc">2000亩,草鱼</div>
          </div>
          <el-popover
          placement="right"
          width="400"
          trigger="click">
            <div>111</div>
            <img class='more-img' :src="require('@pic/更多.png')" slot="reference">
        </el-popover>
        </div>
      </div>
    </div>
    <div class="fishing-main">
      <map
        :center="center"
        :zoom="7"
      >
        <!-- <marker 
          v-for="m in markers"
          :position.sync="m.position"
          :clickable="true"
          :draggable="true"
          @g-click="center=m.position"
        ></marker> -->
      </map>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {load, Map, Marker} from 'vue-google-maps'
load('AIzaSyCpZ9-yQ0VfQBiwEZZRulkwMyA7-zLzQOg');

export default {
  components: {
    Map,
    Marker
  },
  data () {
    return {
      center: { lat: 48.8538302, lng: 2.2982161 },
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
}
</script>

<style scoped lang="scss">
  .fishing-view{

  }
  map {
  width:100%;
  height: 600px;
  display: block;
}
</style>