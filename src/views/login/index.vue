<template>
  <div class="login-container">
    <div class="main-container">
      <div class="main-header">数字渔场</div>
      <div class="main-wrapper">
        <div class="login-log-wrapper">
          <img class="login-log" :src="require('@pic/插图/首页.png')">  
        </div>
        <div class="login-wrapper">
          <div class="login-header">
            <div class="login-hd-item active">账号登陆</div>
            <div class="login-hd-item">扫码登陆</div>
          </div>
          <div class="login-body">
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form"  label-position="left">
              <el-form-item label="" prop="username">
                <el-input placeholder="请输入用户名" v-model="loginForm.username">
                  <img slot="prefix" class="input-icon" :src="require('@pic/用户.png')">  
                </el-input>
              </el-form-item>
              <el-form-item label="" prop="password">
                <el-input placeholder="请输入密码" v-model="loginForm.password">
                  <img slot="prefix" class="input-icon" :src="require('@pic/密码.png')">  
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button :loading="loading" type="primary" style="width:100%;margin-top:20px;" @click.native.prevent="handleLogin">
                  登录
                </el-button>
              </el-form-item>
              <div class="tips">
                <div class="tips-item" @click="goToRegister">注册</div>
                <div class="tips-item">忘记密码？</div>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon name="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon name="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="password"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon name="eye" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          Sign in
        </el-button>
      </el-form-item>
      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div>
    </el-form> -->
  </div>
</template>

<script lang="ts">
import { isValidUsername } from '@/utils/validate';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { UserModule } from '@/store/modules/user';
import { Form as ElForm } from 'element-ui';
import { Route } from 'vue-router';
const validateUsername = (rule: any, value: string, callback: any) => {
  if (!isValidUsername(value)) {
    callback(new Error('请输入正确的用户名'));
  } else {
    callback();
  }
};
const validatePass = (rule: any, value: string, callback: any) => {
  if (value.length < 5) {
    callback(new Error('密码不能小于5位'));
  } else {
    callback();
  }
};

@Component
export default class Login extends Vue{
  loginForm = {
    username: 'admin',
    password: 'admin',
  };
  loginRules = {
    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
    password: [{ required: true, trigger: 'blur', validator: validatePass }],
  };
  loading = false;
  pwdType = 'password';
  redirect: string | undefined = undefined;

  @Watch('$route', { immediate: true })
  OnRouteChange(route: Route) {
    // TODO: remove the "as string" hack after v4 release for vue-router
    // See https://github.com/vuejs/vue-router/pull/2050 for details
    this.redirect = route.query && route.query.redirect as string;
  }

  showPwd() {
    if (this.pwdType === 'password') {
      this.pwdType = '';
    } else {
      this.pwdType = 'password';
    }
  }

  handleLogin() {
    (this.$refs.loginForm as ElForm).validate((valid: boolean) => {
      if (valid) {
        this.loading = true;
        UserModule.Login(this.loginForm).then(() => {
          this.loading = false;
          this.$router.push({ path: this.redirect || '/' });
        }).catch(() => {
          this.loading = false;
        });
      } else {
        console.error('Login: error submit!!');
        return false;
      }
    });
  }

  goToRegister() {
    this.$router.push({path: '/register'})
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
/* .login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
} */
</style>

<style lang="scss" scoped>
.login-container{
  background: linear-gradient(to right, #3e61d2, #3a88d9);
  height: 100vh;
  box-sizing:border-box;
  background-size:100%;
  background-position:center;
  width:100%;
  overflow: hidden;
}
.main-container{
  width:1200px;
  margin: 0 auto !important;
  .main-header{
    font-size:60px;
    width: 100%;
    font-family:FZHanZhenGuangBiaoS-GB;
    font-weight:400;
    line-height:113px;
    color:rgba(255,255,255,1);
    letter-spacing:50px;
    text-align:center;
    padding-top:5%;
  }
  .main-wrapper{
    margin-top:60px;
    display:flex;
    .login-log-wrapper{
      width:800px;
      text-align:center;
    }
    .login-log{
      width:600px;
      height: 400px;
    }
    .login-wrapper{
      width: 300px;
      height: 360px;
      background:#fff;
      box-shadow:0px 0px 10px rgba(103,101,101,0.75);
      border-radius:4px;
      .login-header{
        height: 80px;
        display: flex;
        align-items:center;
      }
      .login-hd-item{
        flex:1;
        text-align:center;
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:#aaa;
        &.active{
          color:#5D5D5D;
        }
        &:first-child{
          position: relative;
          &:after{
            content:'';
            width:2px;
            height:18px;
            background:#aaa;
            right: 0;
            position:absolute;
            top:2px;
          }
        }
      }
      .login-body{
        padding:20px;
        img{
          width:18px;
          height: 18px;
          margin-left:4px;
          position: relative;
          top:4px;
        }
        .tips{
          display:flex;
          align-items:center;
          font-size:16px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:#aaa;
          .tips-item{
            flex:1;
            &:last-child{
              text-align:right;
            }
          }
        }
      }
    }
  }
}


/* ipad横屏 */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : landscape){
  .main-wrapper{
    .login-log-wrapper{
      width:650px !important;
      img{
        width: 600px !important;
        height: 400px !important;
      }
    }
  }

}
</style>
