<template>
  <div>
    content
  </div>
  <!-- <div class="content-wrapper">
    <div class="loading-container">
      <me-loading/> 
      <div class="loading-wrapper">
        <me-loading/>
      </div>
    </div>
    <me-scroll ref="scroll">
      <div class="content">
        <div class="pic">
          <a href="" class="pic-link">
            <img src="" alt="" class="pic-img">
          </a>
        </div>
        <div class="section">
          <h4 class="section-title"></h4>
          <ul class="section-list">
            <li
              class="section-item">
              <a href="" class="section-link">
                <p class="section-pic">
                  <img src="" alt="" class="section-img" />
                </p>
                <p class="section-name"></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop @backtop="backToTop" visible="isBacktopVisible"/>
    </div>
  </div>-->
</template>

<script>
  import MeLoading from 'base/loading';
  import MeScroll from 'base/scroll';
  import MeBacktop from 'base/backtop';
  // import {getCategoryContent} from 'api/category';
  // import storage from 'assets/js/storage';
  // import {CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from './config';

  export default {
    name: 'CategoryContent',
    components: {
      MeLoading,
      MeScroll,
      MeBacktop
    },
     data() {
      return {
        isBacktopVisible: false        
      };
    },
    methods: {
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      }
    }  
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

  .content-wrapper {
    position: relative;
    height: 100%;
  }

  .loading-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: $category-popup-z-index;
    @include flex-center();
    width: 100%;
    height: 100%;
    /*background-color: $modal-bgc;*/

    .mine-loading {
      color: #fff;
      font-size: 14px;
    }
  }
  .loading-wrapper {
    width: 50%;
    padding: 30px 0;
    background-color: $modal-bgc;
    border-radius: 4px;
  }

  .content {
    padding: 10px;
  }

  .pic {
    margin-bottom: 12px;

    &-link {
      display: block;
    }

    &-img {
      width: 100%;
    }
  }

  .section {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      height: 28px;
      line-height: 28px;
      color: #080808;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      padding: 10px 10px 0;
    }

    &-item {
      width: (100% / 3);
    }

    &-link {
      display: block;
    }

    &-pic {
      position: relative;
      width: 80%;
      padding-bottom: 80%;
      margin: 0 auto;
    }

    &-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-name {
      height: 36px;
      line-height: 36px;
      text-align: center;
      @include ellipsis();
    }
  }

  .g-backtop-container {
    bottom: 10px;
  }
  
</style>
