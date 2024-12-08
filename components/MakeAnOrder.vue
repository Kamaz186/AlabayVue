<template>
  <div class="makeAnOrder">
    <button v-on:mouseover="onHover" v-on:mouseleave="onLeave" :class="{ 'active': isOrderActive }">Сделать заказ</button>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
  
const isOrderActive = ref(false)

const onHover = () => {
  isOrderActive.value = true
}
  
const onLeave = () => {
  isOrderActive.value = false
}
</script>
  
<style scoped>
.makeAnOrder {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}
  
.makeAnOrder button {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  width: 168px;
  height: 48px;
  border-radius: 118px;
  border: 2px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
}
  
.makeAnOrder button:hover {
  background-color: black;
  color: white;
  border: 2px solid white;
}
</style>