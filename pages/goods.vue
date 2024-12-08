<template>
  <div class="goodsPage">
    <Navigation />
    <div class="infoText">
      <h1>Вы можете выбрать кулинарные направления</h1>
    </div>
    <div class="content">
      <div class="chooseKindOfKitchen">
        <div class="kitchenBlock" @click="openFoodWindow('fastFood')">
          <img src="../assets/images/fast-food.svg" alt="Фастфуд" />
          <h2>Фастфуд</h2>
          <span>Фастфуд – это быстрая еда, созданная для удобства и скорости. 
          Она включает популярные блюда, такие как бургеры, картофель фри, пиццу и многое другое. 
          Быстрые и сытные закуски подойдут для перекуса на ходу или для полноценного 
          приема пищи.</span>
        </div>
        <div class="kitchenBlock" @click="openFoodWindow('russianFood')">
          <img src="../assets/images/russian-food.svg" alt="Русская кухня" />
          <h2>Русская кухня</h2>
          <span>Русская кухня – это сочетание сытных, ароматных блюд, которые дарят уют и тепло. 
          Борщ, пельмени, блины, соленья и традиционные каши – всё это создаёт особую атмосферу и 
          насыщает разнообразием вкусов. Настоящая русская еда для тех, кто ценит традиции и 
          домашний комфорт.</span>
        </div>
        <div class="kitchenBlock" @click="openFoodWindow('vietnamFood')">
          <img src="../assets/images/vietnam-food.svg" alt="Вьетнамская кухня" />
          <h2>Вьетнамская кухня</h2>
          <span>Вьетнамская кухня – это свежесть и яркость вкусов: тонкий баланс кисло-сладких, 
          пряных и соленых нот. Фо, спринг-роллы, бун бо – всё это блюда, наполненные свежими 
          травами, рисовой лапшой и экзотическими специями. Настоящее гастрономическое путешествие 
          в Азию, где каждый кусочек дарит новые впечатления.</span>
        </div>
        <div class="kitchenBlock" @click="openFoodWindow('japaneseFood')">
          <img src="../assets/images/japanese-food.svg" alt="Японская кухня" />
          <h2>Японская кухня</h2>
          <span>Японская кухня – это гармония вкуса, красоты и простоты. Суши, роллы, 
            рамен и сашими поражают разнообразием и изяществом. Блюда готовятся из свежайших 
            ингредиентов, подчёркивая натуральные вкусы. Японская еда – это баланс и искусство, 
            каждый прием пищи превращающий в особый ритуал.</span>
        </div>
        <div class="kitchenBlock" @click="openFoodWindow('italianFood')">
          <img src="../assets/images/italian-food.svg" alt="Итальянская кухня" />
          <h2>Итальянская кухня</h2>
          <span>Итальянская кухня – это страсть и тепло Средиземноморья на вашей тарелке. 
            Пицца с тонкой корочкой, паста с ароматными соусами, ризотто и нежная моцарелла – 
            каждое блюдо пропитано свежестью и богатством вкусов. Итальянская еда – это простота и 
            любовь к натуральным ингредиентам, превращающая каждый прием пищи в праздник.</span>
        </div>
      </div>
    </div>
    <div v-if="isFoodWindowOpen" class="foodWindow" @click="closeFoodWindow">
      <div class="foodWindowContent" @click.stop>
        <h2>{{ selectedFood }} меню</h2>
        <div class="foodItems">
          <div class="foodItem" v-for="(item, index) in foodData[selectedFood]" :key="index">
            <img :src="item.image" alt="food" />
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isFoodWindowOpen = ref(false);
const selectedFood = ref('');
const foodData = ref({
  fastFood: [
    { name: 'Бургер', description: 'Сочный бургер с говядиной и сыром', image: '' },
    { name: 'Картофель фри', description: 'Хрустящий картофель фри', image: '' },
    { name: 'Пицца', description: 'Классическая пицца с сыром и томатами', image: '' },
  ],
  russianFood: [
    { name: 'Борщ', description: 'Традиционный украинский борщ', image: '' },
    { name: 'Пельмени', description: 'Вареники с мясом и соусом', image: '' },
  ],
  vietnamFood: [
    { name: 'Фо', description: 'Традиционный вьетнамский суп', image: '' },
    { name: 'Спринг-роллы', description: 'Спринг-роллы с креветками', image: '' },
  ],
  japaneseFood: [
    { name: 'Суши', description: 'Роллы с рыбой и рисом', image: '' },
    { name: 'Рамен', description: 'Японский суп с лапшой и мясом', image: '' },
  ],
  italianFood: [
    { name: 'Паста', description: 'Паста с соусом песто', image: '' },
    { name: 'Пицца', description: 'Итальянская пицца с моцареллой', image: '../assets/images/italian_pizza.jpg' },
  ],
});

const openFoodWindow = (foodType) => {
  selectedFood.value = foodType;
  isFoodWindowOpen.value = true;
};

const closeFoodWindow = () => {
  isFoodWindowOpen.value = false;
};
</script>

<style scoped>
.goodsPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.infoText {
  width: 1572px;
  height: 61px;
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  color: #333;
}

.content {
  margin-top: 28px;
  padding: 20px;
  width: 100%;
}

.chooseKindOfKitchen {
  display: flex;
  justify-content: space-evenly;
  gap: 28px;
  padding-top: 45px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.kitchenBlock {
  margin-top: 45px;
  width: 248px;
  height: 258px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  text-align: left;
  cursor: pointer;
}

.kitchenBlock:hover {
  transform: translateY(-10px);
}

.kitchenBlock img {
  width: 306px;
  height: 320px;
  object-fit: cover;
}

.kitchenBlock h2 {
  margin-top: 10px;
  font-size: 32px;
  font-weight: bold;
}

.kitchenBlock span {
  margin-top: 10px;
  font-size: 22px;
  color: #555;
}

.foodWindow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.foodWindowContent {
  background-color: white;
  padding: 30px;
  width: 50%;
  height: 80%;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.foodItems {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.foodItem {
  width: 200px;
  text-align: center;
}

.foodItem img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
