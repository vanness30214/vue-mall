<template>
  <swiper :options="swiperOption">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper, swiperSlider} from 'vue-awesome-swiper';

  export default {
    name: 'MeSlider',
    data() {
      return {
        swiperOption: {
          watchOverflow: true,
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          slidesPerView: 1,
          loop: this.data.length <= 1 ? false : this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }

        }
      };

    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return [
            'horizontal',
            'vertical'
          ].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      }
    },
    components: {
      swiper,
      swiperSlider
    }
  };
</script>

<style lang="scss" scoped>

</style>
