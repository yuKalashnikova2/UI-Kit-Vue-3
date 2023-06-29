<script setup>
import Header from '@/components/layout/Header.vue'
import SideBar from './components/layout/SideBar.vue'
import { ref } from 'vue'

const isOpenedMenu = ref(false)
const toggleOpen = () => {
  isOpenedMenu.value = !isOpenedMenu.value
}
</script>

<template>

  <div class="container">
      <div class="sidebar-toggle" @click="toggleOpen" >
        &#5125;
      </div>
   
      <Header></Header>
      <SideBar :openSideBar="isOpenedMenu"></SideBar>
    <div :class="['content', {content_full: !isOpenedMenu}]">
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

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background-color: var(--primary-color);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
 
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}

</style>
