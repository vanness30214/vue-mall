<template>
  <div>
    sda
  </div>
</template>

<script>
  import {getHomeRecommend} from 'api/home';

  export default {
    name: 'HomeRecommend',
    created() {
      getHomeRecommend(1);
    }
  };
</script>

<style scoped>

</style>
