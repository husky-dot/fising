<template>
  <div class="mangood-view">
    <div class="fishing-main-container">
      <div class="left-nav-wrapper">
        <div class='left-nav-list-wrapper'>
          <div class="left-nav-item-wrapper" :class="{'active': selIndex === index}"
            @click="handleChangeTab(index)"
            v-for="(navItem,index) in navList" :key="index">
            <img :src="navItem.imgSrc" :width="navItem.style.width" :height="navItem.style.height">
            <p>{{navItem.title}}</p>
          </div>
        </div>
      </div>
      <div class="fishing-main">
        <component :is="curComponent" />
      </div>
    </div>
  </div>
</template>
<script>
import GoodHourse from './components/goods/index.vue'
import FishMedical from './components/fishmedical/index.vue'
import FishFry from './components/fishfry/index'
export default {
  components: {
    'comGood': GoodHourse,
    'comFishMedical': FishMedical,
    'comFishFry': FishFry
  },
  data () {
    return {
      curComponent: 'comGood',
      selIndex: 0,
      navList: [
        { title: '饲料仓库', imgSrc: require('@pic/库存管理/饲料.png'), style: {width: '40px', height: '40px'}},
        { title: '渔药仓库', imgSrc: require('@pic/库存管理/渔药.png'), style: {width: '25px', height: '25px'}},
        { title: '鱼苗仓库', imgSrc: require('@pic/库存管理/渔苗.png'), style: {width: '30px', height: '30px'}}
      ]
    }
  },
  methods: {
    handleChangeTab (index) {
      this.selIndex = index
      switch (index) {
        case 0:
          this.curComponent = 'comGood'
          break;
        case 1:
          this.curComponent = 'comFishMedical'
          break;
        case 2:
          this.curComponent = 'comFishFry'
          break;
      }
    }
  }
}
</script>
<style scope lang='scss'>
  .mangood-view{
    .left-nav-wrapper{
      width: 200px !important;
    }
    .left-nav-item-wrapper{
      display: flex;
      align-items: center;
      height: 100px;
      width: 100%;
      padding: 0 16px;
      border-bottom: 1px solid #f0f0f0;
      &.active {
        background:#F5F8FA
      }
      img{
        width: 50px;
        height: 50px;
        margin-right: 16px;
      }
    }
    .fishing-main{
      flex: 1;
      padding: 30px;
    }
    .fishing-header{
      display: flex;
      .fishing-hd-left{
        flex: 1;
        display: flex;
        border-right: 1px solid #bbb;
        img{
          width: 80px;
          height: 80px;
        }
        .left-content{
          flex: 1;
          display: flex;
          .left-con-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 12px;
            .sale-btn{
              width: 100px;
            }
            .weight{
              color: #3A88D9;
              font-size:23px;
              font-family:FZHanZhenGuangBiaoS-GB;
              .unit{
                font-size: 16px;
                padding-left: 4px;
              }
            }
            .sub-title{
              color: #5D5D5D;
            }
          }
        }
      
      }
      .fishing-hd-right{
        flex: 1;
      }
    }

    .type-wrapper{
      display: flex;
      align-items: center;
      padding: 0 6px;
      box-sizing: border-box;
      justify-content: center;
      .type-img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 6px;
      }
    }

    .tb-item-dark{
      color: #3A88D9;
    }
    
    .opt-wrapper{
      display: flex;
      padding: 0 16px;
      justify-content: space-between;
      .opt-img1{
        width: 22px;
        height: 22px;
      }
      .opt-img2{
        width: 20px;
        height: 20px;
        position: relative;
        top:1px;
      }
      .opt-img3{
        width: 20px;
        height: 20px;
        position: relative;
        top:1px;
      }
    }
    .tb-sub-list{
      display: flex;
      flex-wrap: wrap;
      .tb-sub-item{
        width: 88px;
        &:nth-child(2n){
          width: 70px;
          margin-left: 10px;
        }
      }
    }
  }
</style>