<template>
  <div class="retrospectinfo-view">
    <h4 class="fishing-title">鱼体信息</h4>
    <el-container>
      <el-main>
        <!-- 鱼体信息 S -->
        <div class="box-card card-1">
          <div class="card1-left">
            <p>草 鱼</p>
            <img class="opt-img2" :src="require('@pic/生产日志/yu.jpg')">
            <p class="code">查询码 31039172121</p>
            <p @click="showDialogCode = true" class="text-blue">生成二维码>></p>
          </div>
          <div class="card1-right">
            <div class="form-wrapper">
              <div class="form-wrapper-item">
                <div class="form-item">
                  养殖批次：<span class="text-blue">DS19301031</span>
                </div>
                <div class="form-item">
                  养殖周期：<span class="text-blue"> 2018-3-4~2018-9-10</span>
                </div>
              </div>
              <div class="form-wrapper-item">
                <div class="form-item">
                  生产单位：<span class="text-blue">厦门市赛洒水产有限公司</span>
                </div>
                <div class="form-item">
                  出塘规格：<span class="text-blue">2000g/尾</span>
                </div>
              </div>
              <div class="form-wrapper-item">
                <div class="form-item">
                  生产基地：<span class="text-blue">厦门集美基地</span>
                </div>
                <div class="form-item">
                  出塘重量：<span class="text-blue">2000kg</span>
                </div>
              </div>
              <div class="form-wrapper-item">
                <div class="form-item">
                  地址：<span class="text-blue">厦门集美基地</span>
                </div>
                <div class="form-item">
                  出塘重量：<span class="text-blue">2000kg</span>
                </div>
              </div>
              <div class="form-wrapper-item">
                <div class="form-item">
                  来源池塘：<span class="text-blue">1号池塘</span>
                </div>
                <div class="form-item">
                  销售批次：<span class="text-blue">DS1028361</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 鱼体信息 E -->
        <!-- 鱼苗来源 S -->
        <div class="box-card card-2">
          <div class="card2-left">
            <img :src="require('@pic/生产日志/鱼8.png')">
            <p class="source text-blue">鱼苗来源</p>
          </div>
          <div class="card2-right">
            <div class="form-wrapper">
              <div class="form-wrapper-item">
                <div class="form-item">
                  养殖批次：<span class="text-blue">DS19301031</span>
                </div>
                <div class="form-item">
                  养殖周期：<span class="text-blue"> 2018-3-4~2018-9-10</span>
                </div>
              </div>
              <div class="form-wrapper-item">
                <div class="form-item">
                  生产单位：<span class="text-blue">厦门市赛洒水产有限公司</span>
                </div>
                <div class="form-item">
                  出塘规格：<span class="text-blue">2000g/尾</span>
                </div>
              </div>
              <div class="form-wrapper-item">
                <div class="form-item">
                  生产基地：<span class="text-blue">厦门集美基地</span>
                </div>
                <div class="form-item">
                  出塘重量：<span class="text-blue">2000kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 鱼苗来源 E -->
        <!-- 用料情况 S -->
        <div class="box-card card-2">
          <div class="card2-left">
            <img :src="require('@pic/生产日志/饲料1.png')">
            <p class="source text-blue">用料情况</p>
          </div>
          <div class="card2-right">
            <el-table
              cell-class-name="text-blue"
              :data="tableData1">
              <el-table-column prop="name" label="饲料名称" width="140"/>
              <el-table-column prop="count" label="用料次数" width="90"/>
              <el-table-column prop="dosage" label="饲料用量" width="90"/>
              <el-table-column prop="prounit" label="生产单位" align="center"/>
            </el-table>
          </div>
        </div>
        <!-- 用料情况 E -->
        <!-- 用药情况 S -->
        <div class="box-card card-2">
          <div class="card2-left">
            <img :src="require('@pic/生产日志/药.png')">
            <p class="source text-blue">用药情况</p>
          </div>
          <div class="card2-right">
            <el-table
              cell-class-name="text-blue"
              :data="tableData2">
              <el-table-column prop="name" label="药物名称" width="140"/>
              <el-table-column prop="count" label="用药次数" width="90"/>
              <el-table-column prop="dosage" label="药物用量" width="90"/>
              <el-table-column prop="prounit" label="生产单位" align="center"/>
            </el-table>
          </div>
        </div>
        <!-- 用药情况 E -->
      </el-main>
      <el-aside width="320px" style='padding-top:20px;'>
        <div class="char-wrapper">
          <div class="char-title">鱼体情况</div>
          <div class="char" id="radar"></div>
        </div>
        <div class="char-wrapper">
          <div class="char-title">饲料情况</div>
          <div class="char" id="pie"></div>
        </div>
        <div class="char-wrapper">
          <div class="char-title">用药情况</div>
          <div class="char" id="pie2"></div>
        </div>
      </el-aside>
    </el-container>
    <!-- 生成二维码 S -->
    <gener-code :show.sync="showDialogCode" />
  </div>
</template>
<script>
import echarts from 'echarts'
import GenerCode from './components/GenerCode/index.vue'
export default {
  components: {
    GenerCode
  },
  data () {
    return {
      showDialogCode: false,
      tableData1: [
        { name: 'D1099草饲料', count: 15, dosage: '20kg', prounit: '厦门刻蚀科技邮有限公司'},
        { name: 'D129草鱼饲料', count: 15, dosage: '20kg', prounit: '厦门刻蚀科技邮有限公司'}
      ],
      tableData2: [
        { name: 'D1099草饲料', count: 15, dosage: '20kg', prounit: '厦门刻蚀科技邮有限公司'},
        { name: 'D129草鱼饲料', count: 15, dosage: '20kg', prounit: '厦门刻蚀科技邮有限公司'}
      ],
      chart: null
    }
  },
  mounted () {
    this.initRadar()
    this.initPie()
    this.initPie2()
  },
  methods: {
    initRadar () {
      this.chart = echarts.init(document.getElementById('radar'))
      const option = {
        tooltip: {},
        radar: {
          // shape: 'circle',
          indicator: [
            { text: '字段一', max: 6500},
            { text: '字段二', max: 16000},
            { text: '字段三', max: 30000},
            { text: '字段四', max: 38000},
            { text: '字段五', max: 52000},
            { text: '字段六', max: 25000}
          ],
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data : [
            {
              value : [4300, 10000, 28000, 35000, 50000, 19000],
              name : '预算分配（Allocated Budget）'
            },
            {
              value : [5000, 14000, 28000, 31000, 42000, 21000],
              name : '实际开销（Actual Spending）',
              areaStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
              }
            }
          ]
        }]
      }
      this.chart.setOption(option)
    },
    initPie () {
      this.chart = echarts.init(document.getElementById('pie'))
      const option = {
        legend: {
          orient: 'vertical',
          right: 10,
          top: 60,
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            center: ['30%', '50%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
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
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ]
          }
        ]
      }
      this.chart.setOption(option)
    },
    initPie2 () {
      this.chart = echarts.init(document.getElementById('pie2'))
      const option = {
        legend: {
          orient: 'vertical',
          right: 10,
          top: 60,
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius : '65%',
            avoidLabelOverlap: false,
            center: ['30%', '50%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
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
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ]
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style scope lang='scss'>
  .retrospectinfo-view{
    p{
      padding: 0;
      margin: 0;
    }
  }
  .box-card{
    width: 100%;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 5px rgba(0,0,0,0.16);
    border-radius: 10px;
  }
  .card-1{
    display: flex;
    padding: 12px;
    .card1-left{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 108px;
        height: 108px;
        border: 1px solid #f0f0f0;
        border-radius: 4px;
      }
      p{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:300;
        line-height: 2;
        &.code{
          padding-top: 6px;
        }
        &.gen-code{
          line-height: 24px;
          font-size: 12px;
        }
      }
    }
    .card1-right{
      flex: 1;
      padding:10px 10px 10px 20px;
    }
  }
  .card-2{
    display: flex;
    margin-top: 20px;
    .card2-left{
      width: 90px;
      border-right: 1px solid #f0f0f0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 25px 0;
      width: 120px;
      img{
        width: 50px;
        height: 50px;
      }
      .source{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height: 28px;
      }
    }
    .card2-right{
      flex: 1;
      padding:10px 10px 10px 20px;
      .form-item{
        padding: 10px 0 !important;
      }
    }
  }
  .form-wrapper{
    .form-wrapper-item{
      display: flex;
      align-items: center;
      .form-item{
        font-size: 14px;
        flex: 1;
        padding: 7px 0;
        font-weight:300;
        span{
          font-weight:300;
        }
      }
    }
  }
  .char-wrapper{
    box-sizing: border-box;
    .char-title{
      font-size:14px;
      font-family:Microsoft YaHei;
      font-weight:300;
      position: relative;
      padding-left: 12px;
      &::before{
        content: '';
        width:6px;
        height:6px;
        background:rgba(58,136,217,1);
        border-radius:50%;
        position: absolute;
        left:0;
        top:4px;
      }
    }
  }
  .char{
    width: 300px;
    height: 250px;
  }
</style>