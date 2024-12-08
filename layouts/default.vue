<template>
  <div>
    <div class="searchingMenu">
      <div class="logotype">
        <nuxt-link to="/">
          <img src="../assets/images/logotype.svg" alt="Логотип">
        </nuxt-link>
      </div>
      <div class="searchBar">
        <form @submit.prevent="onSearchSubmit">
          <input type="text" v-model="searchQuery" placeholder="Найти ресторан, блюдо или товар" class="searchInput" />
          <button type="submit" class="searchButton">Найти ресторан</button>
        </form>
      </div>
      <div class="profile">
        <img src="../assets/images/profile.svg" alt="Профиль">
      </div>
    </div>

    <div class="menuBlock">
      <Navigation />

      <div class="makeAnOrder">
        <button v-on:mouseover="onHover" v-on:mouseleave="onLeave" :class="{ 'active': isOrderActive }">
          Сделать заказ
        </button>
      </div>
    </div>

    <NuxtPage />

    <div class="miniSupport" v-if="!isChatOpen" @click="openChat">
      <img src="../assets/images/support-logo.svg" alt="Поддержка">
    </div>

    <div v-if="isChatOpen" class="chatWindow">
      <div class="chatHeader">
        <h3>Поддержка</h3>
        <button @click="closeChat">Закрыть</button>
      </div>
      <div v-if="!isProblemSelected" class="problemSelector">
        <button @click="selectProblem('Заказ')">У меня проблема по заказу</button>
        <button @click="selectProblem('Доставка')">У меня проблема по доставке</button>
        <button @click="selectProblem('Поддержка')">Связь с поддержкой</button>
      </div>
      <div class="chatMessages">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '~/components/MovingMenu.vue'

const searchQuery = ref('')
const isChatOpen = ref(false)
const isProblemSelected = ref(false)
const isOrderActive = ref(false)
const messages = ref(["Привет, чем могу помочь?", "Есть ли у вас вопросы по заказам или доставке?", "Наши менеджеры всегда на связи."])

const onSearchSubmit = () => {
  if (searchQuery.value.trim()) {
    console.log('Поиск по запросу: ', searchQuery.value)
  } else {
    console.log('Поиск не выполнен. Поле пустое.')
  }
}

const openChat = () => {
  isChatOpen.value = true
}

const closeChat = () => {
  isChatOpen.value = false
  isProblemSelected.value = false
  messages.value = [
    "Привет, чем могу помочь?",
    "Есть ли у вас вопросы по заказам или доставке?",
    "Наши менеджеры всегда на связи."
  ]
}

const selectProblem = (problem) => {
  isProblemSelected.value = true
  if (problem === 'Заказ') {
    messages.value.push("Какой именно заказ вызывает проблему?")
  } else if (problem === 'Доставка') {
    messages.value.push("Какие проблемы с доставкой у вас возникли?")
  } else {
    messages.value.push("Как мы можем вам помочь? Свяжитесь с нами.")
  }
}

const onHover = () => {
  isOrderActive.value = true
}

const onLeave = () => {
  isOrderActive.value = false
}
</script>

<style scoped>
.menuBlock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1647px;
  height: 55px;
  margin: 0 auto;
  background-color: #ffffff;
}

.searchingMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

.miniSupport {
  position: fixed;
  left: 16px;
  bottom: 18px;
  z-index: 9999;
  background-color: #30FA16;
  border-radius: 12px;
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.miniSupport img {
  width: 44px;
  height: auto;
}

.chatWindow {
  position: fixed;
  left: 16px;
  bottom: 80px;
  width: 300px;
  height: 400px;
  background-color: #f0ead2;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.chatHeader {
  background-color: #6a994e;
  padding: 10px;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatMessages {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  border-bottom: 1px solid #ccc;
}

.problemSelector {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.problemSelector button {
  padding: 10px;
  background-color: #6a994e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.problemSelector button:hover {
  background-color: #25d96b;
}
</style>
