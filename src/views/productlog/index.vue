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
      <div class="fishing-header">
        <div class="fishing-hd-left">
          <img :src="require('@pic/生产日志/鱼.png')" slot="reference">
          <div class="left-content">
            <div class="left-con-item">
              <div class="weight">2999<span class="unit">kg</span></div>
              <p class="sub-title">成鱼存量</p>
            </div>
            <div class="left-con-item">
              <el-button class="sale-btn" type="primary" size="small">销售</el-button>
            </div>
          </div>
        </div>
        <div class="fishing-hd-right">
          <el-form :model="searchForm" :rules="rules" size="mini" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-date-picker
                v-model="searchForm.daterange" type="daterange" range-separator="至"
                start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-col :span="11">
                <el-select v-model="searchForm.state" placeholder="选择状态">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col :span="11" style='margin-left:10px;'>
                <el-button type="primary">查询</el-button>
                <el-button>取消</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchForm: {
        pageSize: 10,
        currentPage: 0,
        daterange: null
      }
    }
  },
  components: {
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
    padding: 30px;
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
            width: 120px;
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
</style>