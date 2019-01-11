<template>
  <div class="register-view">
    <div class="register-wrapper">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
  .register-wrapper{
    width:550px;
    height:650px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(112,112,112,1);
    box-shadow:0px 0px 10px rgba(0,0,0,0.16);
    opacity:1;
    margin: 0 atuo;
    border-radius: 4px;
  }
</style>
