<!-- -->
<template>
  <div class="fishing-main-container">
    <div class="left-nav-wrapper">
      <div class="left-nav-list-wrapper">
        <div class="left-nav-item-wrapper">
          <div class="left-nav-item">
            <img :src="require('@pic/bg.png')">
            <div class="item-content">
              <div class="content-title">广东南沙草鱼养殖基地</div>
              <div class="content-desc">2000亩,草鱼</div>
            </div>
            <el-popover placement="right" width="60" trigger="click">
              <div class="more-list">
                <div class="more-list-item">添加池塘</div>
                <div class="more-list-item">编辑基地</div>
                <div class="more-list-item">删除基地</div>
              </div>
              <img class="more-img" :src="require('@pic/更多.png')" slot="reference">
            </el-popover>
          </div>
          <div class="left-nav-sub-wrapper link-active">
            <div class="left-nav-sub-item">
              <div class="thumb-wrapper">
                <img :src="require('@pic/bg.png')">
                <p>301</p>
              </div>
              <div class="item-content">
                <div class="content-title">广东南沙草鱼养殖基地</div>
                <div class="content-desc">2000亩,草鱼</div>
              </div>
              <el-popover placement="right" width="60" trigger="click">
                <div class="more-list">
                  <div class="more-list-item" @click="drawingMap(true)">编辑 池塘</div>
                  <div class="more-list-item">编辑基地</div>
                </div>
                <img class="more-img" :src="require('@pic/更多.png')" slot="reference">
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
  data() {
    return {
      map: null,
      latlng: {
        lat: 24.259727,
        lng: 118.08216
      },
      drawingManager: null,
      polyOptions: {
        fillColor: "#3A88D9",
        strokeColor: "#FAE455",
        fillOpacity: 0.6,
        strokeOpacity: 0.8,
        strokeWeight: 1,
        // clickable: false,
        editable: true,
        zIndex: 1
      },
      //绘制区域（池塘）集合
      shapes: [],
      //池塘数据，获取出来的。
      ponds: [
        {
          pondName: "池塘名称",
          latlngs: [
            { lat: 24.259915790864195, lng: 118.08138485768836 },
            { lat: 24.259751952597806, lng: 118.08134194234412 },
            { lat: 24.25948540929537, lng: 118.08237995723289 },
            { lat: 24.25965658395747, lng: 118.08242555478614 }
          ]
        }
      ]
    };
  },
  mounted() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: this.latlng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      mapTypeControl: false,
      streetViewControl: false
    });
    this.ponds.map(pond => {
      let polyOptions = Object.assign({paths: pond.latlngs},this.polyOptions);
      polyOptions.editable = false;
      let polygon = new google.maps.Polygon(polyOptions);
      polygon.setMap(this.map);
      this.addShape(polygon);
    });

    // this.drawingMap(true);
  },
  methods: {
    //绘制地图（val为true可绘制，false为不可绘制）
    drawingMap(val) {
      if (val) {
        if (this.drawingManager) {
          this.drawingManager.setDrawingMode(
            google.maps.drawing.OverlayType.MARKER
          );
          this.drawingManager.setOptions({
            drawingControl: true
          });
        } else {
          this.drawingManager = new google.maps.drawing.DrawingManager({
            //光标的模式（绘制模式）
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            //绘制工具可见性
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: ["polygon"]
            },
            // markerOptions: {
            //   icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            // },
            polygonOptions: this.polyOptions
          });
          this.drawingManager.setMap(this.map);
          //监听绘制完成
          google.maps.event.addListener(
            this.drawingManager,
            "polygoncomplete",
            polygon => {
              this.addShape(polygon);
              //calculate area
              this.calculateArea(polygon);
            }
          );
        }
      } else {
        this.drawingManager.setDrawingMode(null);
        this.drawingManager.setOptions({
          drawingControl: false
        });
      }
    },
    addShape(polygon) {
      this.shapes.push(polygon);
      //注册事件
      google.maps.event.addListener(polygon, "click", () => {
        alert("click");
      });
    },
    //删除所有的绘制区域（池塘）
    deleteAllShape() {
      this.shapes.map(shape => {
        shape.setMap(null);
      });
      this.shapes = [];
    },
    //计算面积
    calculateArea(polygon) {
      let result = 0;
      result = google.maps.geometry.spherical.computeArea(polygon.getPath()); //平方米
      return result;
    }
  }
};
</script>

<style scoped lang="scss">
.fishing-view {
}
#map {
  width: 100%;
  height: 100%;
  display: block;
}
.left-nav-list-wrapper {
}
.left-nav-item {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #c0c0c0;
  img {
    width: 70px;
    height: 55px;
  }
  .item-content {
    flex: 1;
    padding: 4px 8px;
    box-sizing: border-box;
    .content-title {
      font-size: 13px;
    }
    .content-desc {
      color: #3a88d9;
      font-size: 12px;
      padding-top: 4px;
    }
  }
  .more-img {
    width: 15px;
    height: 15px;
    position: relative;
    top: 2px;
  }
}
.fishing-main {
  flex: 1;
}
.left-nav-sub-wrapper {
  &.link-active {
    background: #f5f8fa;
  }
}
.left-nav-sub-item {
  display: flex;
  padding: 16px;
  padding-bottom: 5px;
  .thumb-wrapper {
    width: 60px;
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
    p {
      padding: 0;
      font-size: 12px;
      color: #bbbbbb;
      margin: 0;
      line-height: 2;
    }
  }

  .item-content {
    flex: 1;
    padding: 4px 8px;
    box-sizing: border-box;
    .content-title {
      font-size: 12px;
    }
    .content-desc {
      color: #3a88d9;
      font-size: 12px;
      padding-top: 4px;
    }
  }

  .more-img {
    width: 13px;
    height: 13px;
    position: relative;
    top: 2px;
  }
}
</style>