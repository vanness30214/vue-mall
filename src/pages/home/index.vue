<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <me-scroll></me-scroll>
    <div>
      <home-slider></home-slider>
    </div>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import MeScroll from 'base/scroll';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll
    }

  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
