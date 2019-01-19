<template>
  <div class="code-container">
    <el-dialog
      title="追溯二维码"
      @close="closeDialog"
      @open="handleOpen"
      top="5vh"
      show="show"
      width="400px"
      :visible.sync="visible">
      <el-container>
        <el-main class="code-main">
          <img :src="require('@pic/生产日志/二维码.png')">
          <p>查询码 31039172121</p>
        </el-main>
        <el-footer class="code-ft">
          <el-button size="small" type="primary" @click="closeDialog">保存</el-button>
        </el-footer>
      </el-container>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: this.show,
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
  .code-main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 150px;
      height: 150px;
    }
    p{
      font-size:14px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color: #5D5D5D;
    }
  }
  .el-dialog__body{
    padding-bottom: 0;
    padding-top: 0;
  }
  .code-ft{
    height: 60px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>