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
        <el-table-column label="销售日期/单号" align="center">
          <template slot-scope="scope">
            {{scope.row.data}} <br> <span class="tb-item-dark">{{scope.row.batchNo}}</span>
          </template>
        </el-table-column>
        <el-table-column label="成鱼信息">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">品种：<span class="tb-item-dark">{{scope.row.castInfo.name}}</span></div>
              <div class="tb-item">规格：<span class="tb-item-dark">{{scope.row.castInfo.sec}}</span></div>
              <div class="tb-item">数量：<span class="tb-item-dark">{{scope.row.castInfo.count}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="销售情况">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">规格：<span class="tb-item-dark">{{scope.row.proCoast.fishCoast}}</span></div>
              <div class="tb-item">重量：<span class="tb-item-dark">{{scope.row.proCoast.foodCoast}}</span></div>
              <div class="tb-item">总价：<span class="tb-item-dark">{{scope.row.proCoast.otherCoast}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="采购情况">
          <template slot-scope="scope">
            <div class="tb-list">
              <div class="tb-item">采购人：<span class="tb-item-dark">{{scope.row.proStatus.status}}</span></div>
              <div class="tb-item">联系电话：<span class="tb-item-dark">{{scope.row.proStatus.weight}}</span></div>
              <div class="tb-item">地址：<span class="tb-item-dark">{{scope.row.proStatus.exitCount}}</span></div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="mark"/>
      </el-table>
    </el-main>
  </div>
</template>
<script>
export default {
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
          batchNo: 'BD19019021',
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
  components: {
  }
}
</script>

<style scope lang='scss'>

  .log-view{
  }
</style>