<template>
  <swiper :options="swiperOption" ref='swiper'>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default {
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      },
      data: {
        type: [Array, Object]
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
    },
    watch: {
      data() {
        this.update();
      }
    },
    methods: {
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  };

  .swiper-slide {
    height: auto;
  }
</style>
