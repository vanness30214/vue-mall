<template>
  <div class="slider-wrapper">
      <me-slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
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
  export default {
    name: 'homeslider',
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: [
          {
            'linkUrl': 'http://www.baidu.com',
            'picUrl': require('./1.jpg')
          },
          {
            'linkUrl': 'http://www.baidu.com',
            'picUrl': require('./2.jpg')
          },
          {
            'linkUrl': 'http://www.baidu.com',
            'picUrl': require('./3.jpg')
          },
          {
            'linkUrl': 'http://www.baidu.com',
            'picUrl': require('./4.jpg')
          }
        ]
      };
    },
    components: {
      MeSlider,
      swiperSlide
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
