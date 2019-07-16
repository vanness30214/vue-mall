<template>
  <me-navbar class="header">
    <div slot="center">搜索框</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>
<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'CategoryHeader',
    components: {
      MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
