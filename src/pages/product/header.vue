<template>
  <me-navbar class="header">
       <i class="iconfont icon-back" slot="left"></i>
        <span class="header-text"
          slot="center"
        >商品详情</span>
      <i class="iconfont icon-cart" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'ProductHeader',
    components: {
      MeNavbar
    },
    data() {
      return {
      };
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/scss/mixins";
.header{
  width: 100%;
  @include flex-between();
  z-index: 2;

  background-color: transparent;
  transition: background-color 0.5s;
  &-text{
    @include flex-center();
    color:$icon-color-default;
  }
}
  .iconfont {
    color:$icon-color-default;
    font-size: $icon-font-size;
  }
</style>
