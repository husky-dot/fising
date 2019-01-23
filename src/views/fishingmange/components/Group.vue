<template>
  <div class="diglog-wrapper-main">
    <div class="diglog-wrapper-left">
      <div class="dialog-title">
        <img class="more-img" :src="require('@pic/管理详情页/智能分析/智能分析.png')">生长智能分析
      </div>
      <div class="left-body">
        <div class="char" id="category"></div>
      </div>
    </div>
    <div class="diglog-wrapper-right">
      <div class="dialog-title">
        <img class="more-img" :src="require('@pic/管理详情页/智能分析/水下视频.png')">水下视频监控
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
    this.category()
  },
  methods: {
    category () {
      this.chart = echarts.init(document.getElementById('category'))
      const option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
        }]
      };
      this.chart.setOption(option)
    },
  },
}
</script>

<style scope lang='scss'>
  .diglog-list{
    margin: 4px 0;
    .list-item{
      padding: 0 16px;
      display: flex;
      font-size: 13px;
      line-height: 24px;
      .label{
        width: 80px;
      }
      .name{
        flex: 1;
      }
    }
  }
  .char{
    height: 250px;
  }
</style>