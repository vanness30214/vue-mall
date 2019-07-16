<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <c-tabbar/>
    </div>

  </div>
</template>
<script>

  import CTabbar from 'components/tabbar';
  export default {
    name: 'App',
    components: {
      CTabbar
    }
  };
</script>
