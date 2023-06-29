<script setup>
import Header from '@/components/layout/Header.vue'
import SideBar from './components/layout/SideBar.vue';
</script>

<template>

  <div class="container">
   
      <Header></Header>
      <SideBar></SideBar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>


</template>

<style lang="scss">
@import './styles/global.scss';

#app {
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

</style>
