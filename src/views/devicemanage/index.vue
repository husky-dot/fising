<!-- -->
<template>
  <div class="fishing-main-container">
    <div class="left-nav-wrapper">
      <div class='left-nav-list-wrapper'>
        <div class="left-nav-item-wrapper" :class="{'active': selIndex === index}" v-for="(navItem,index) in navList" :key="index">
          <div class="img-wrapper">
            <img :src="navItem.imgSrc" :width="navItem.style.width" :height="navItem.style.height">
          </div>
          <p>{{navItem.title}}</p>
        </div>
      </div>
      <el-button class='add-device-btn' type="primary" @click="handleAddDevice" size='small'>添加设备</el-button>
    </div>
    <div class="fishing-main">
      <el-form ref="couponForm" :model="searchForm" :rules="rules" :inline="true" size="mini" class="add-coupon-form">
        <el-form-item label="选择日期：" prop="daterange">
          <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
          v-model="searchForm.daterange"
          style="width:305px"/>
        </el-form-item>
        <el-form-item label="选择来源：">
          <el-select v-model="searchForm.region" placeholder="请选择来源" style='width:80%'>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style='margin-right:0'>
          <el-button id="search" type="primary">查询</el-button>
          <el-button id="download" type="primary" plain>重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list"
        row-key="id"
        style="margin-top:40px;"
        :header-cell-style="{background:'#F1F8FE'}"
        v-loading="loading" border stripe >
        <el-table-column label="接入日期" width="100" prop="data" align="center" />
        <el-table-column label="设备信息">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">设备名称：<span class="tb-item-dark">{{scope.row.deviceInfo.name}}</span></div>
              <div class="tb-item">设备编号：<span class="tb-item-dark">{{scope.row.deviceInfo.id}}</span></div>
              <div class="tb-item">设备型号：<span class="tb-item-dark">{{scope.row.deviceInfo.type}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="来源信息">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">企业：<span class="tb-item-dark">{{scope.row.sourceInfo.business}}</span></div>
              <div class="tb-item">联系人：<span class="tb-item-dark">{{scope.row.sourceInfo.person}}</span></div>
              <div class="tb-item">电话：<span class="tb-item-dark">{{scope.row.sourceInfo.phone}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="设备状态">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">设备状态：<span class="tb-item-dark">{{scope.row.deviceState.devicestate}}</span></div>
              <div class="tb-item">关联状态：<span class="tb-item-dark">{{scope.row.deviceState.contachstate}}</span></div>
              <div class="tb-item">关联信息：<span class="tb-item-dark">{{scope.row.deviceState.contactinfo}}</span></div>
            </div>
          </template>
        </el-table-column>
         <el-table-column label="设备信息" width="110">
          <template slot-scope="scope">
            <div class="opts-btn">
              <el-button type="primary" size="mini" @click="hanldeRealte">关联</el-button>
              <el-button size="mini">查看</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- 添加设备 S -->
      <add-device :show.sync="showAddDeviceDialog" />
      <!-- 添加设备 E -->
      <!-- 关联设备 S -->
      <relate-device :show.sync="relateDeviceDialog" />
      <!-- 关联设备 E -->
      <!-- S 分页组件 -->
      <pagination
        class="pagination"
        :current-page.sync="pageParams.currentPage"
        :page-size.sync="pageParams.pageSize"
        :total="total"
        @change="getList"
      />
      <!-- E 分页组件 -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// load('AIzaSyCpZ9-yQ0VfQBiwEZZRulkwMyA7-zLzQOg');
import { Pagination } from '@/components/index'
import AddDevice from './components/AddDevice/index'
import RelateDevice from './components/RelateDevice/index'
export default {
  components: {
    Pagination,
    AddDevice,
    RelateDevice
  },
  data () {
    return {
      total: 0,
      loading: false,
      pageParams: {
        pageSize: 10,
        currentPage: 0
      },
      selIndex: 0,
      showAddDeviceDialog: false,
      relateDeviceDialog: false,
      navList: [
        { title: '水质检测设备', imgSrc: require('@pic/设备管理/水质检测仪.png'), style: {width: '40px', height: '40px'}},
        { title: '风送投料机', imgSrc: require('@pic/设备管理/投料机.png'), style: {width: '25px', height: '25px'}},
        { title: '增氧机控制设备', imgSrc: require('@pic/设备管理/增氧机.png'), style: {width: '30px', height: '30px'}},
        { title: '水下视频监控设备', imgSrc: require('@pic/设备管理/水下视频监控.png'), style: {width: '30px', height: '30px'}},
        { title: '视频监控', imgSrc: require('@pic/设备管理/视频监控.png'), style: {width: '26px', height: '26px'}}
      ],
      searchForm: {
        daterange: null,
        region: null
      },
      rules: {},
      list: [
        {data: '2018-09-10', deviceInfo: {
          name: '水质检测设备',
          id: 'DS124524555',
          type: '3参数'
        }, deviceState: {
          devicestate: '运行中',
          contachstate: '已关联',
          contactinfo: 'A基地1号池'
        }, sourceInfo: {
          business: '厦门市十元捂脸科技有限公司',
          person: '小智',
          phone: '15345028957'
        }}
      ]
    }
  },
  mounted () {
  },
  methods: {
    getList () {},
    // 添加设备
    handleAddDevice () {
      this.showAddDeviceDialog = true
    },
    // 关联设备
    hanldeRealte () {
      this.relateDeviceDialog = true
    }
  }
}
</script>

<style scoped lang="scss">
  .fishing-view{

  }
  .left-nav-wrapper{
    text-align: center;
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
    .img-wrapper{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #3a88b9;
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .fishing-main{
    padding: 32px;
  }
  .tb-item-dark{
    color: #3A88D9;
  }
  .options-wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    .associated-img{
      width: 25px;
      height: 12px;
    }
    .show-img{
      width: 24px;
      height: 18px;
    }
    .del-img{
      width: 18px;
      height: 16px;
    }
  }
  .add-device-btn{
    margin-top:40px;
  }
  .opts-btn{
    display:flex;
    flex-direction: column;
    button{
      margin-left: 0;
      width: 90%;
      margin-bottom: 10px;
    }
  }
</style>