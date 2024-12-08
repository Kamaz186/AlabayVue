<template>
  <div class="movingMenu">
    <nuxt-link to="/" class="navButton" active-class="active" exact>Главная</nuxt-link>
    <nuxt-link to="/dogs" class="navButton" active-class="active">Алабаи</nuxt-link>
    <nuxt-link to="/goods" class="navButton" active-class="active">Кухня</nuxt-link>
    <nuxt-link to="/aboutUs" class="navButton" active-class="active">О нас</nuxt-link>
    <nuxt-link to="/support" class="navButton" active-class="active">Поддержка</nuxt-link>
  </div>
</template>

<style scoped>
.movingMenu {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1647px;
  max-width: 1647px;
  height: 55px;
}

.navButton {
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  margin: 0 8px;
  background-color: white;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
}

.navButton.active {
  background-color: #DBDFD0;
  color: black;
}
</style>
