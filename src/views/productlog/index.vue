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
          <el-form :model="searchForm" size="mini" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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

      <el-table :data="list"
        row-key="id"
        style="margin-top:40px;"
        :header-cell-style="{background:'#F1F8FE'}"
        v-loading="loading" border stripe>
        <el-table-column label="投苗日期/批次号" align="center">
          <template slot-scope="scope">
            {{scope.row.data}} <br> {{scope.row.batchNo}}
          </template>
        </el-table-column>
        <el-table-column label="种类" align="center">
          <template slot-scope="scope">
            <div class="type-wrapper">
              <img class="type-img" :src="require('@pic/生产日志/鱼2.png')">
              {{scope.row.type}}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="投苗情况">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item"><span class="tb-item-dark">{{scope.row.castInfo.name}}</span></div>
              <div class="tb-item">规格：<span class="tb-item-dark">{{scope.row.castInfo.sec}}</span></div>
              <div class="tb-item">数量：<span class="tb-item-dark">{{scope.row.castInfo.count}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="养殖成本">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">鱼苗成本：<span class="tb-item-dark">{{scope.row.proCoast.fishCoast}}</span></div>
              <div class="tb-item">饲料成本：<span class="tb-item-dark">{{scope.row.proCoast.foodCoast}}</span></div>
              <div class="tb-item">其它成本：<span class="tb-item-dark">{{scope.row.proCoast.otherCoast}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="养殖状态">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">状态：<span class="tb-item-dark">{{scope.row.proStatus.status}}</span></div>
              <div class="tb-item">均重：<span class="tb-item-dark">{{scope.row.proStatus.weight}}</span></div>
              <div class="tb-item">存塘量：<span class="tb-item-dark">{{scope.row.proStatus.exitCount}}</span></div>
            </div>
          </template>
        </el-table-column>
         <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="opt-wrapper">
              <router-link  :to="{ path: '/managelog/productlog/index/salerecord'}">
                <img class="opt-img1" :src="require('@pic/生产日志/销售.png')">
              </router-link>
              <router-link  :to="{ path: '/managelog/productlog/index/retrospectinfo'}">
                <img class="opt-img2" :src="require('@pic/生产日志/二维码.png')">
               </router-link>
               <router-link  :to="{ path: '/managelog/productlog/index/logdetail'}">
                <img class="opt-img3" :src="require('@pic/生产日志/详情.png')">
               </router-link>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- S 分页组件 -->
      <pagination
        class="pagination"
        :current-page.sync="searchForm.currentPage"
        :page-size.sync="searchForm.pageSize"
        :total="total"
        @change="getList"
      />
      <!-- E 分页组件 -->
    </div>
  </div>
</template>
<script>
import { Pagination } from '@/components/index'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      loading: false,
      total: 0,
      searchForm: {
        pageSize: 10,
        currentPage: 0,
        daterange: null
      },
      list: [
        {
          data: '2018-09-10',
          batchNo: 'BD19019021',
          type: '南美小龙霞',
          castInfo: {
          name: '抗病DN对虾',
          sec: '1000尾/斤',
          count: '200'
        }, 
        proCoast: {
          fishCoast: 2000,
          foodCoast: 10000,
          otherCoast: 1000
        }, 
        proStatus: {
          status: '养殖中',
          weight: '1kg',
          exitCount: '20000kg'
        }}
      ]
    }
  },
  methods: {
    getList () {}
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
</style>