<template>
  <div class="slider-wapper">
    <me-loading v-if="!sliders.length"/>
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-else
    >
      <swiper-slide
        v-for="(item, index) in sliders"
        :key="index"
      >
          <img :src="item" alt="" class='slider-img'>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import MeLoading from 'base/loading';
  import {getProductDetail} from 'api/product';
  export default {
    name: 'HomeNav',
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
      };
    },
    created() {
      const id = this.$route.params.id;
      getProductDetail(id).then(data => {
        this.sliders = data.item.images;
      });
    },
    components: {
      MeSlider,
      MeLoading,
      swiperSlide
    }

  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .nav {
    width: 100%;
    padding-top: 15px;
    background-color: #fff;

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: 20%;
      margin-bottom: 15px;
    }

    &-link {
      @include flex-center(column);
    }

    &-pic {
      width: 60%;
      margin-bottom: 8px;
    }
  }
.slider-img{
  width: 100%;
  height: 100%;
}
</style>
