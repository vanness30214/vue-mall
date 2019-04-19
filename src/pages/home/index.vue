<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <me-scroll :data="recommends">
      <home-slider></home-slider>
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommends"></home-recommend>
    </me-scroll>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import MeScroll from 'base/scroll';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      HomeNav,
      HomeRecommend
    },
    data() {
      return {
        recommends: []
      };
    },
    methods: {
      updateScroll() {

      },
      getRecommends(recommends) {
        this.recommends = recommends;
      }
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
