<template>
    <div class="header">
      <MovingMenu />
      <SearchingMenu />
      <MiniSupport />
    </div>
</template>
  
<script setup>
import MovingMenu from '../components/MovingMenu.vue'
import SearchingMenu from '../components/SearchingMenu.vue'
import MiniSupport from '../components/MiniSupport.vue'
</script>
  
<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1647px;
  max-width: 1647px;
  margin: 0 auto;
}
</style>