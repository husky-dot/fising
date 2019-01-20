<template>
  <div class="log-view">
    <el-header>
      <el-form ref="couponForm" :model="pageParams" :inline="true" size="mini" class="form-wrapper">
        <el-form-item label="选择日期：" prop="daterange">
          <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
            v-model="pageParams.daterange"
            style="width:305px"/>
        </el-form-item>
        <el-form-item label="选择来源：">
          <el-select v-model="pageParams.region" placeholder="请选择来源">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button id="search" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button id="download" type="primary" plain>重置</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-table :data="list"
        row-key="id"
        :header-cell-style="{background:'#F1F8FE'}"
        v-loading="loading" border stripe>
        <el-table-column label="日期" align="center">
          <template slot-scope="scope">
            {{scope.row.data}}
          </template>
        </el-table-column>
        <el-table-column label="投入品信息" align="center">
          <template slot-scope="scope">
            <!-- <div class="type-info-wrapper">
              <div class="img-wrapper bg-red">
                <img class="opt-img2" :src="require('@pic/工具栏/饲料.png')">
              </div>
              <span>饲料</span>
            </div> -->
            <div class="type-info-wrapper">
              <div class="img-wrapper bg-green">
                <img class="opt-img2" :src="require('@pic/工具栏/药物.png')">
              </div>
              <span>渔药</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="投入品信息">
          <template slot-scope="scope">
            <div class="tb-list">
              <span class="tb-item-dark text-blue">{{scope.row.castInfo.name}}</span>
              <div class="tb-item">种类：<span class="tb-item-dark">{{scope.row.castInfo.sec}}</span></div>
              <div class="tb-item">规格：<span class="tb-item-dark">{{scope.row.castInfo.count}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="投入情况">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">投入数量：<span class="tb-item-dark">{{scope.row.proCoast.fishCoast}}</span></div>
              <div class="tb-item">投入重量：<span class="tb-item-dark">{{scope.row.proCoast.foodCoast}}</span></div>
              <div class="tb-item">共计成本：<span class="tb-item-dark text-red">{{scope.row.proCoast.otherCoast}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="mark"/>
      </el-table>

      <!-- S 分页组件 -->
      <pagination
        class="pagination"
        :current-page.sync="pageParams.currentPage"
        :page-size.sync="pageParams.pageSize"
        :total="total"
        @change="getList"
      />
      <!-- E 分页组件 -->
    </el-main>
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
      total: 0,
      loading: false,
      pageParams: {
        pageSize: 10,
        currentPage: 0,
        daterange: null,
        region: null
      },
      list: [
        {
          data: '2018-09-10',
          type: '南美小龙霞',
          castInfo: {
          name: '抗病DN对虾',
          sec: '1000尾/斤',
          count: '200'
        },
        mark: '暂无备注',
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

<style scope lang='scss'>

  .log-view{
  }
  .type-info-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    .img-wrapper{
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 6px;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
</style>