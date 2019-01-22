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
                <p><span class="text-pure">200000</span><span class="unit">尾</span></p>
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
        <div class='body-main'>
          <div class='body-main-left'>
            <div class="char" id="pie"></div>
          </div>
          <div class='body-main-right'>
            <el-table :data="tableData">
              <el-table-column prop="date" label="投放时间"/>
              <el-table-column prop="name" label="种类" width="60"/>
              <el-table-column prop="spec" label="规格" />
              <el-table-column prop="count" label="数量" width='60'/>
              <el-table-column prop="data" label="养殖周期" width='80' />
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="diglog-wrapper-right">
      <div class="dialog-title">
        <img class="more-img" :src="require('@pic/管理详情页/池塘概况/概况.png')">池塘信息
      </div>
      <img class='info-img' :src="require('@pic/jietu.png')">
      <div class="pond-name">
        <span class="pond">池塘名称</span><span class="name">#01</span>
      </div>
      <div class='diglog-list'>
        <div class="list-item">
          <div class='label'>类型</div>
          <div class='name text-blue'>土池塘</div>
        </div>
        <div class="list-item">
          <div class='label'>面积</div>
          <div class='name text-blue'>50亩</div>
        </div>
        <div class="list-item">
          <div class='label'>水深</div>
          <div class='name text-blue'>2.5米</div>
        </div>
        <div class="list-item">
          <div class='label'>养殖种类</div>
          <div class='name text-blue'>草鱼</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        count: 10,
        spec: '2000尾/斤',
        data: 40
      }, {
        date: '2016-05-04',
        name: '王小虎',
        count: 10,
        spec: '2000尾/斤',
        data: 60
      }]
    }
  },
  mounted() {
    this.initPie()
  },
  methods: {
    initPie () {
      this.chart = echarts.init(document.getElementById('pie'))
      const option = {
        legend: {
          orient: 'vertical',
          right: 10,
          top: 60,
          data:['草鱼','鲢鱼','鳙鱼','小龙虾']
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '50%'],
            avoidLabelOverlap: false,
            center: ['35%', '50%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:335, name:'草鱼'},
              {value:310, name:'鲢鱼'},
              {value:234, name:'鳙鱼'},
              {value:135, name:'小龙虾'}
            ]
          }
        ]
      }
      this.chart.setOption(option)
    },
  },
}
</script>

<style scope lang='scss'>

</style>