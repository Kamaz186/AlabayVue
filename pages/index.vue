<template>
  <div class="indexPage">
    <div class="background">
      <img src="../assets/images/general-background.svg" alt="Фон" class="backgroundImage" />
    </div>
    <div class="overlayText">
      <h1>Вашу еду доставят наши алабаи</h1>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.indexPage {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlayText {
  position: relative;
  width: 845px;
  height: 55px;
  margin: 12px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  color: rgb(0, 0, 0);
  z-index: 2;
}

.background {
  position: absolute;
  top: 67px;
  left: 0;
  width: 100%;
  height: calc(100vh - 67px);
  z-index: 1;
}

.backgroundImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>