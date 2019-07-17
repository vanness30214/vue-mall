<template>
    <div class="product">
      <product-header class="header"></product-header>
      <me-scroll
        ref="scroll"
      >

        <product-slider class="slider"/>
        <div>s</div>
        <div class="g-backtop-container">
          <me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
        </div>
      </me-scroll>
    </div>
</template>

<script>
  import {getProductDetail} from 'api/product';
  import ProductHeader from './header.vue';
  import MeScroll from 'base/scroll';
  import MeBacktop from 'base/backtop';
  import ProductSlider from './slider.vue';
  export default {
    name: 'Product',
    methods: {
      getDetail() {
        const id = this.$route.params.id;
        console.log(id);
        getProductDetail(id).then(data => {
          console.log(data);
        });
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      }
    },

    created() {
      this.getDetail();
    },
    components: {
      ProductHeader,
      MeScroll,
      MeBacktop,
      ProductSlider
    },
    data() {
      return {
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    }
  };
</script>

<style lang="scss" scoped>
 @import "~assets/scss/mixins";
 .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
   .header{
     background-color: $header-bgc;
   }
  }
  .slider{
    height: 400px;
  }
</style>
