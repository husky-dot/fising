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
          <el-form-item label="关联渔场:">
            <el-select v-model="addForm.type" placeholder="请选择渔场">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关联池塘：">
            <el-select v-model="addForm.type" placeholder="请选择池塘">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="通道一名称：">
            <el-input placeholder="请输入通道一对接设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="连接状态：">
            <el-input placeholder="自动载入" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="通道二名称：">
            <el-input placeholder="请输入通道二对接设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="连接状态：">
            <el-input placeholder="自动载入" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="通道三名称：">
            <el-input placeholder="请输入通道三对接设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="连接状态：">
            <el-input placeholder="自动载入" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="通道四名称：">
            <el-input placeholder="请输入通道三对接设备名称" v-model="addForm.type"/>
          </el-form-item>
          <el-form-item label="连接状态：">
            <el-input placeholder="请自动载入" v-model="addForm.type"/>
          </el-form-item>
           <el-form-item />
          <el-form-item align="right" style="margin-top:30px;">
            <el-button type="primary" @click="handleSave">保存</el-button>
            <el-button @click="closeDialog">取消</el-button>
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
    },
    // 保存
    handleSave () {
      this.$emit('update:show', false)
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
