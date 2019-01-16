<template>
  <div class="condition-container">
    <el-dialog
      title="添加设备"
      @close="closeDialog"
      @open="handleOpen"
      top="0vh"
      show="show"
      width="910px"
      :visible.sync="visible">
    </el-dialog>
    <el-main>
      <el-form ref="addForm" :model="addForm" :rules="rules" label-width="80px">
        <el-form-item label="设备类型:">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.type" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="addForm.type" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>  
    </el-main>
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

<style scope>

</style>
