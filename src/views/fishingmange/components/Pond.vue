<template>
  <div class="diglog-wrapper-main">
    <div class="diglog-wrapper-left">
      <div class="dialog-title">
         <img class="more-img" :src="require('@pic/管理详情页/池塘概况/概况.png')">池塘概况
      </div>
      <div class="left-body">
        <div class="left-body-head">
          <div class="left-data-item">
            <div class="item-img-wrapper bg-pure">
              <img class="more-img" :src="require('@pic/管理详情页/池塘概况/投放鱼苗.png')">
            </div>
            <div class="item-content-wrapper">
              <div class="item-content">
                <p class="item-title">投放鱼苗</p>
                <p><span class="text-pure">200000</span>尾</p>
              </div>
            </div>
          </div>
          <div class="left-data-item">
            <div class="item-img-wrapper bg-green">
              <img class="more-img" :src="require('@pic/管理详情页/池塘概况/存塘量.png')">
            </div>
            <div class="item-content-wrapper">
              <div class="item-content">
                <p class="item-title">存塘量</p>
                <p><span class="text-green">200000</span><span class="unit">kg</span></p>
              </div>
            </div>
          </div>
          <div class="left-data-item">
            <div class="item-img-wrapper bg-pure-dark">
              <img class="more-img" :src="require('@pic/管理详情页/池塘概况/饵料系数.png')">
            </div>
            <div class="item-content-wrapper">
              <div class="item-content">
                <p class="item-title">饵料系数</p>
                <p><span class="text-pure-dark">200000</span><span class="unit">kg</span></p>
              </div>
            </div>
          </div>
          <div class="left-data-item">
            <div class="item-img-wrapper bg-orange">
              <img class="more-img" :src="require('@pic/管理详情页/池塘概况/投放鱼苗.png')">
            </div>
            <div class="item-content-wrapper">
              <div class="item-content">
                <p class="item-title">养殖天数</p>
                <p><span class="text-orange">200000</span><span class="unit">kg</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="diglog-wrapper-right">1111</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style scope lang='scss'>

</style>