<template>
  <div class="item-view">
    <!-- <svg-icon v-if="icon" :name="icon"/> -->
    <img v-if='icon' :src="require(`@pic/${icon}`)">
    <span v-if="title" slot="title">{{title}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  @Prop({ default: '' }) icon!: string;
  @Prop({ default: '' }) title!: string;
}
</script>

<style scope lang='scss'>
  .item-view{
    img{
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

</style>
