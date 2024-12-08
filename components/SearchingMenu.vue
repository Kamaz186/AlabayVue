<template>
  <div class="searchingMenu">
    <div class="logotype">
      <a href="/">
        <img src="../assets/images/logotype.svg" alt="логотип" />
      </a>
    </div>
    <div class="searchBar">
      <form @submit.prevent="onSearchSubmit">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Найти ресторан, блюдо или товар"
          class="searchInput"
        />
        <button type="submit" class="searchButton">Найти ресторан</button>
      </form>
    </div>
    <div class="profile">
        <img src="../assets/images/profile.svg" alt="профиль" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

const onSearchSubmit = () => {
  if (searchQuery.value.trim()) {
    console.log('Поиск по запросу: ', searchQuery.value)
  } else {
    console.log('Поиск не выполнен. Поле пустое.')
  }
}
</script>

<style scoped>
.searchingMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
  
.searchingMenu::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 25px;
  right: 25px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.25);
}

.logotype img {
  height: 66px;
  cursor: pointer;
}

.searchBar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
}

.searchInput {
  padding: 8px;
  padding-left: 40px;
  border: 1px solid #ccc;
  height: 66px;
  width: 363px;
  background-image: url('../assets/images/magnifier.svg');
  background-position: 10px center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  font-size: 18px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  outline: none;
  border: none;
}

.searchButton {
  padding: 8px 16px;
  background-color: #28FB6E;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  height: 66px;
  transition: background-color 0.3s ease;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.searchButton:hover {
  background-color: #25d96b;
}

.profile {
  flex-shrink: 0;
  border-radius: 50%;
  cursor: pointer;
}

.profile img {
  width: 96px;
  height: 96px;
}
</style>
