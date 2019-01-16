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
          <div class="left-nav-sub-wrapper link-active">
            <div class="left-nav-sub-item">
              <div class="thumb-wrapper">
                <img :src="require('@pic/bg.png')">
                <p>301</p>
              </div>
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
  .left-nav-list-wrapper{
  }
  .left-nav-item{
    display: flex;
    padding: 16px;
    border-bottom: 1px solid #C0C0C0;
    img{
      width:70px;
      height:55px;
    }
    .item-content{
      flex: 1;
      padding: 4px 8px;
      box-sizing: border-box;
      .content-title{
        font-size: 13px;
      }
      .content-desc{
        color: #3A88D9;
        font-size: 12px;
        padding-top: 4px;
      }
    }
    .more-img{
      width: 15px;
      height: 15px;
      position: relative;
      top:2px;
    }
  }
  .fishing-main{
    flex: 1;
  }
  .left-nav-sub-wrapper{
    &.link-active{
      background:#F5F8FA
    }
  }
  .left-nav-sub-item{
    display: flex;
    padding: 16px;
    padding-bottom:5px;
    .thumb-wrapper{
      width: 60px;
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      align-items: center;
      img{
        width:50px;
        height:50px;
      }
      p{
        padding: 0;
        font-size: 12px;
        color: #BBBBBB;
        margin: 0;
        line-height: 2;
      }
    }

    .item-content{
      flex: 1;
      padding: 4px 8px;
      box-sizing: border-box;
      .content-title{
        font-size: 12px;
      }
      .content-desc{
        color: #3A88D9;
        font-size: 12px;
        padding-top: 4px;
      }
    }

    .more-img{
      width: 13px;
      height: 13px;
      position: relative;
      top:2px;
    }
  }
</style>