<template>
  <transition name="breadcrumb" mode="fade-enter">
    <div v-if="isCollapse" class="sidebar-menu">
     子菜单
    </div>
  </transition>
</template>
<script>
import { AppModule } from '@/store/modules/app';
export default {
  data () {
    return {
    }
  },
  computed: {
    isCollapse () {
      return AppModule.sidebar.opened;
    }
  }
}
</script>

<style scope lang='scss'>
  .sidebar-menu{
    min-height: calc(100vh - 50px);
    position: relative;
    overflow: hidden;
    width: 200px !important;
    background: red;
  }

</style>
