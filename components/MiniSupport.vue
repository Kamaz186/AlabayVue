<template>
  <div>
    <div class="miniSupport" v-if="!isChatOpen" @click="openChat">
      <img src="../assets/images/support-logo.svg" alt="логотип поддержки" />
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
  
const isChatOpen = ref(false)
const isProblemSelected = ref(false)
const messages = ref([
  "Привет, чем могу помочь?",
  "Есть ли у вас вопросы по заказам или доставке?",
  "Наши менеджеры всегда на связи."
])
  
const openChat = () => { isChatOpen.value = true }
const closeChat = () => { isChatOpen.value = false; isProblemSelected.value = false; messages.value = ["Привет, чем могу помочь?", "Есть ли у вас вопросы по заказам или доставке?", "Наши менеджеры всегда на связи."] }
const selectProblem = (problem) => {
  isProblemSelected.value = true;
  if (problem === 'Заказ') messages.value.push("Какой именно заказ вызывает проблему?");
  if (problem === 'Доставка') messages.value.push("Какие проблемы с доставкой у вас возникли?");
  if (problem === 'Поддержка') messages.value.push("Как мы можем вам помочь?");
}
</script>
  
<style scoped>
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
  
.miniSupport.hidden {
  display: none;
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
  
.message {
  margin-bottom: 10px;
  font-size: 17px;
}
</style>