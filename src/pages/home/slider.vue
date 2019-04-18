<template>
  <div class="slider-wrapper">
    <me-loading v-if="!sliders.length" ></me-loading>
       <me-slider
        :direction="direction"
        :loop="loop"
        :interval="interval"
        :pagination="pagination"
        v-else
      >
        <swiper-slide v-for="(item, index) in sliders" :key="index">
          <a :href="item.linkUrl" class="slider-link">
            <img :src="item.picUrl" alt="" class="slider-img">
          </a>
        </swiper-slide>
      </me-slider>

  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {sliderOptions} from './config';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {getHomeSlider} from 'api/home';
  import MeLoading from 'base/loading';
  export default {
    name: 'homeslider',
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
      this.getSliders();
    },
    methods: {
      getSliders() {
        getHomeSlider().then(data => {
          this.sliders = data;
        });
      }
    },
    components: {
      MeSlider,
      swiperSlide,
      MeLoading
    }
  };
</script>

<style scoped>
  .slider-wrapper{
    height: 183px;
  }
  .slider-link{
    display: block;
  }
  .slider-link,.slider-img{
    height: 100%;
    width: 100%;
  }
</style>
