<!-- -->
<template>
  <div class="fishing-main-container">
    <div class="left-nav-wrapper">
      <div class='left-nav-list-wrapper'>
        <div class="left-nav-item-wrapper">
          <div class='left-nav-item'>
            <img :src="require('@pic/bg.png')">
            <div class="item-content">
              <div class='content-title'>广东南沙草鱼养殖基地</div>
              <div class="content-desc">2000亩,草鱼</div>
            </div>
            <el-popover
            placement="right"
            width="60"
            trigger="click">
              <div class="more-list">
                <div class="more-list-item">添加池塘</div>
                <div class="more-list-item">编辑基地</div>
                <div class="more-list-item">删除基地</div>
              </div>
              <img class='more-img' :src="require('@pic/更多.png')" slot="reference">
            </el-popover>
          </div>
          <div class="left-nav-sub-wrapper">
            <div class="left-nav-sub-item">
              <img :src="require('@pic/bg.png')">
              <div class="item-content">
                <div class='content-title'>广东南沙草鱼养殖基地</div>
                <div class="content-desc">2000亩,草鱼</div>
              </div>
              <el-popover
              placement="right"
              width="60"
              trigger="click">
                <div class="more-list">
                  <div class="more-list-item">添加池塘</div>
                  <div class="more-list-item">编辑基地</div>
                  <div class="more-list-item">删除基地</div>
                </div>
                <img class='more-img' :src="require('@pic/更多.png')" slot="reference">
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fishing-main">
      <div id="map"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// load('AIzaSyCpZ9-yQ0VfQBiwEZZRulkwMyA7-zLzQOg');

export default {
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 24.506235, lng: 118.140892},
      zoom: 18
    });
  }
}
</script>

<style scoped lang="scss">
  .fishing-view{

  }
  #map {
  width:100%;
  height: 100%;
  display: block;
}
</style>