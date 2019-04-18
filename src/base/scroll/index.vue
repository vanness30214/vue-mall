<template>
  <swiper :options="swiperOption">
    <swiper-slider>
      <slot></slot>
    </swiper-slider>
  </swiper>
  <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
</template>

<script>
  import {swiper, swiperSlider} from 'vue-awesome-swiper';
  export default {
    name: 'index',
    components: {
      swiper,
      swiperSlider
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          }
        }
      };
    }
  };
</script>

<style scoped>

</style>
