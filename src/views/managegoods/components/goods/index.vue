<!-- -->
<template>
  <div class="manage-wrapper">
    <div class="fishing-header">
      <div class="fishing-hd-left">
        <img :src="require('@pic/库存管理/饲料.png')" slot="reference">
        <div class="left-content">
          <div class="left-con-item">
            <div class="weight">2999<span class="unit">kg</span></div>
            <p class="sub-title">成鱼存量</p>
          </div>
          <div class="left-con-item">
            <el-button @click="onAddFood" class="sale-btn" type="primary" size="mini">添加</el-button>
          </div>
        </div>
      </div>
      <div class="fishing-hd-right">
        <el-form :model="searchForm" size="mini" ref="ruleForm" label-width="80px">
          <el-form-item label="选择日期" prop="name">
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
              <el-button size="mini" type="primary">查询</el-button>
              <el-button size="mini">取消</el-button>
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
      <el-table-column label="日期" align="center" width="140">
        <template slot-scope="scope">
          {{scope.row.data}} <br> {{scope.row.batchNo}}
        </template>
      </el-table-column>
      <el-table-column label="种类" align="center" width="140">
        <template slot-scope="scope">
          <div class="type-wrapper">
            <img class="type-img" :src="require('@pic/生产日志/鱼2.png')">
            {{scope.row.type}}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="购置信息" width="200">
        <template slot-scope="scope">
          <div class="tb-list">
            <div class="tb-item"><span class="tb-item-dark">{{scope.row.castInfo.name}}</span></div>
            <div class="tb-sub-list">
              <div class="tb-sub-item">规格：<span class="tb-item-dark">500kg/袋</span></div>
              <div class="tb-sub-item">数量：<span class="tb-item-dark">{{scope.row.castInfo.count}}</span></div>
              <div class="tb-sub-item">规格：<span class="tb-item-dark">100t</span></div>
              <div class="tb-sub-item">数量：<span class="tb-item-dark">500</span></div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="供应单位信息" width="150">
        <template slot-scope="scope">
          <div class="tb-list">
            <div class="tb-item"><span class="tb-item-dark">北京简化科技有限公司</span></div>
            <div class="tb-item">联系人：<span class="tb-item-dark">小智</span></div>
            <div class="tb-item">电话：<span class="tb-item-dark">18809350121</span></div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="库存状态" width="120">
        <template slot-scope="scope">
          <div class="tb-list">
            <div class="tb-item"><span class="text-green">库存状态</span></div>
            <div class="tb-item">均重：<span class="tb-item-dark">{{scope.row.proStatus.weight}}</span></div>
            <div class="tb-item">剩余：<span class="tb-item-dark">0 kg</span></div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right" width="120">
        <template slot-scope="scope">
          <div class="opt-wrapper">
            <router-link  :to="{ path: '/managelog/productlog/index/logdetail'}">
              <img class="opt-img3" :src="require('@pic/库存管理/详情.png')">
            </router-link>
            <router-link  :to="{ path: '/managelog/productlog/index/logdetail'}">
              <img class="opt-img3" :src="require('@pic/库存管理/删除.png')">
            </router-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- S 添加饲料 -->
    <AddFood :show.sync='addFoodDialog' />
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
</template>

<script type="text/ecmascript-6">
import { Pagination } from '@/components/index'
import AddFood from './AddFood.vue'
export default {
  components: {
    Pagination,
    AddFood
  },
  data () {
    return {
      total: 0,
      loading: false,
      addFoodDialog: false,
      searchForm: {
        pageSize: 10,
        currentPage: 0
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
    getList () {},
    onAddFood () {
      this.addFoodDialog = true
    }
  }
}
</script>

<style scoped lang="scss">
</style>