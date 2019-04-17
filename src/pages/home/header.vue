<template>
  <me-navbar class="header" title="ssk">
    <i class="iconfont icon-scan" slot="left"></i>
<!--    <div slot="center">ssk</div>-->
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .header{
    &.mine-navbar{
      background-color: transparent;
    }
    .iconfont{
      color: $icon-color-default;
      font-size: $icon-font-size ;
    }


  }
</style>
