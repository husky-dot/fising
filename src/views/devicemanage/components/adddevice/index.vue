<template>
  <div class="condition-container">
    <el-dialog
      title="添加设备"
      @close="closeDialog"
      @open="handleOpen"
      top="5vh"
      show="show"
      width="500px"
      :visible.sync="visible">
      <div class="form-wrapper">
        <el-form ref="addForm" :model="addForm" :rules="rules" :inline="true" size="mini" label-position='top' label-width="80px">
          <el-form-item label="设备类型:">
            <el-select v-model="addForm.type" placeholder="请选择设备类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备编号:">
            <el-input placeholder="请输入设备编号" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="来源单位:">
            <el-input placeholder="自动载入" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="设备名称:">
            <el-input placeholder="请输入设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="联系人:">
            <el-input placeholder="自动载入" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="型号:">
            <el-input placeholder="请输入设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="联系电话:">
            <el-input placeholder="请输入设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="设备参数:">
            <el-input placeholder="请输入设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="购买日期:">
            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.type" />
          </el-form-item>
          <el-form-item label="当前状态:">
            <el-input placeholder="请输入设备名称" v-model="addForm.type"/>
          </el-form-item>
           <el-form-item />
          <el-form-item align="right" style="margin-top:30px;">
            <el-button type="primary">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>  
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      visible: this.show,
      addForm: {
        type: null
      },
      rules: {}
    }
  },
  watch: {
    show () {
      this.visible = this.show;
    }
  },
  methods: {
    handleOpen () {},
    closeDialog () {
      this.$emit('update:show', false);
      this.$emit('handleClose');
    }
  }
}
</script>

<style scope lang='scss'>
  .form-wrapper{
    display: flex;
    justify-content: center;
    padding-left: 30px;
    box-sizing: border-box;
    width: 100%;
    .el-form-item {
      width: 180px;
    }
    .el-date-editor--date{
      width: 180px !important;
    }
    .el-select{
      width: 180px !important;
    }
  }
  .el-form-item:nth-child(2n+1){
    margin-right: 40px;
  }
</style>
