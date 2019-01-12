<template>
  <div class="register-view">
    <div class="register-wrapper">
      <div class="reg-title">用户注册</div>
      <el-form :model="regForm" :rules="rules" ref="regForm" :label-position="top" size="mini" class="demo-ruleForm">
        <el-form-item label="姓名:" prop="name">
          <el-input v-model="regForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码:" prop="name">
          <el-input v-model="regForm.name"></el-input>
        </el-form-item>
        <el-form-item label="验证码:" prop="name">
          <el-input v-model="regForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="name">
          <el-input v-model="regForm.name"></el-input>
        </el-form-item>
        <el-form-item label="确认密码:" prop="name">
          <el-input v-model="regForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">我已同意并阅读<span class="text-blue">《数字渔场用户注册协议》</span></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-register" type="primary" size='large'>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      regForm: {

      },
      rules: {

      }
    }
  },
  components: {
  }
}
</script>

<style scope lang='scss'>
  .register-view{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background: linear-gradient(to right, #3e61d2, #3a88d9);
    display: flex;
    justify-content: center;
    align-items: center;
    .el-checkbox__inner{
      border-radius: 50%
    }
  }
  .register-wrapper{
    width:520px;
    height:650px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(112,112,112,1);
    box-shadow:0px 0px 10px rgba(0,0,0,0.16);
    opacity:1;
    margin: 0 atuo;
    border-radius: 4px;
    padding: 0 90px;
  }
  .reg-title{
    font-size:28px;
    font-family:SimHei;
    font-weight:400;
    line-height:80px;
    text-align: center;
  }
  .btn-register{
    width: 90%;
    display: block;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>
