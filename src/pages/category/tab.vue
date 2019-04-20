<template>
  <me-scroll :scrollbar="false">
    <ul class="tab">
      <li class="tab-item"
          :class="{'tab-item-active' : item.id === curId}"
          v-for="(item,index) in items"
          :key="index"
          @click="SwitchTab(item.id)"
      >{{item.name}}</li>
    </ul>
  </me-scroll>
</template>
<script>
  import MeScroll from 'base/scroll';
  import {categoryNames} from './config';
  export default {
    name: 'CategoryTab',
    data() {
      return {
        curId: ''
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.items = categoryNames;
      },
      SwitchTab(id) {
        if (this.curId === id) {
          return;
        }
        this.curId = id;
        this.$emit('switch-tab', id);
      }
    },
    components: {
      MeScroll
    }
  };
</script>

<style lang="scss" scoped>
</style>
