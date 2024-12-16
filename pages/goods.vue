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
        <div class="foodItems">
          <div class="foodItem" v-for="(item, index) in foodData[selectedFood]" :key="index"
            @click="logFoodDetails(item)">
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

import potatoeFreeImage from '../assets/images/potatoe-free.svg';
import burgerImage from '../assets/images/burger.svg';
import nuggetImage from '../assets/images/naggets.svg';
import cocaColaImage from '../assets/images/cola.svg';
import sushiImage from '../assets/images/sushi.svg';
import shawermaImage from '../assets/images/shaurma.svg';
import hotDogImage from '../assets/images/hot-dog.svg';
import iceCreamImage from '../assets/images/ice-cream.svg';
import borshSoupImage from '../assets/images/borsh.svg';
import okroshnkaImage from '../assets/images/okroshka.svg';
import shiSoupImage from '../assets/images/soup-shi.svg';
import solyankaSoupImage from '../assets/images/solyanka.svg';
import sirnikiImage from '../assets/images/sirniki.svg';
import olivieImage from '../assets/images/olivie.svg';
import holodecimage from '../assets/images/holodec.svg';
import bliniImage from '../assets/images/blini.svg';
import foSoupImage from '../assets/images/soup-fo.svg';
import bunChaImage from '../assets/images/bun-cha.svg';
import cocoSoupImage from '../assets/images/soup-coco.svg';
import crispyBlinImage from '../assets/images/cryspi-blin.svg';
import friedRiceImport from '../assets/images/fried-rice.svg';
import choTomImage from '../assets/images/cho-tom.svg';
import banMiImage from '../assets/images/ban-mi.svg';
import saladRollImage from '../assets/images/salad-roll.svg';
import sukiYakiImage from '../assets/images/sukiyaki.svg';
import ramenImage from '../assets/images/ramen.svg';
import riceCurryImage from '../assets/images/curry-rice.svg';
import karaageImage from '../assets/images/kaarage.svg';
import syabuSyabuImage from '../assets/images/syabu-syabu.svg';
import onigiriImage from '../assets/images/onigiri.svg';
import yakigedzaImage from '../assets/images/yakigedza.svg';
import takoyakiImage from '../assets/images/tokoyaki.svg';
import spagettiImage from '../assets/images/spagetti.svg';
import pizzaImage from '../assets/images/pizza.svg';
import frittataImage from '../assets/images/frittata.svg';
import bruskettaImage from '../assets/images/brusketta.svg';
import aranchiniImage from '../assets/images/aranchini.svg';
import antipastoImage from '../assets/images/antipasto.svg';
import karpachoImage from '../assets/images/karpacho.svg';
import paniniImage from '../assets/images/panini.svg';


const isFoodWindowOpen = ref(false);
const selectedFood = ref('');
const foodData = ref({
  fastFood: [
    {
      name: 'Картофель фри',
      description: 'Хрустящий картофель фри.',
      image: potatoeFreeImage
    },
    {
      name: 'Мясной бургер',
      description: 'Сочный бургер с говядиной и сыром.',
      image: burgerImage
    },
    {
      name: 'Нагетсы',
      description: 'Хрустящие куриные нагетсы с золотистой корочкой.',
      image: nuggetImage
    },
    {
      name: 'Добрый кола',
      description: 'Освежающий газированный напиток с ярким вкусом колы.',
      image: cocaColaImage
    },
    {
      name: 'Суши',
      description: 'Классические японские суши с разнообразными начинками.',
      image: sushiImage
    },
    {
      name: 'Шаурма',
      description: 'Традиционная восточная шаурма с сочным мясом.',
      image: shawermaImage
    },
    {
      name: 'Хот-дог',
      description: 'Классический хот-дог с мягкой булочкой и сосиской.',
      image: hotDogImage
    },
    {
      name: 'Мороженое',
      description: 'Кремовое мороженое, тающее во рту.',
      image: iceCreamImage
    },
  ],
  russianFood: [
    {
      name: 'Борщ',
      description: 'Традиционный русский борщ.',
      image: borshSoupImage
    },
    {
      name: 'Окрошка',
      description: 'Вкусная окрошка под квас.',
      image: okroshnkaImage
    },
    {
      name: 'Щи',
      description: 'Традиционный суп "Щи".',
      image: shiSoupImage
    },
    {
      name: 'Солянка',
      description: 'Классическая солянка под сметану.',
      image: solyankaSoupImage
    },
    {
      name: 'Сырники',
      description: 'Сладкие сырники со сгущёнкой.',
      image: sirnikiImage
    },
    {
      name: 'Оливье',
      description: 'Вкусный салат, сделанный из майонеза.',
      image: olivieImage
    },
    {
      name: 'Холодец',
      description: 'Вкусная закуска с хреном.',
      image: holodecimage
    },
    {
      name: 'Блины',
      description: 'Мясные, классические, сладкие блины.',
      image: bliniImage
    }
  ],
  vietnamFood: [
    {
      name: 'Фо',
      description: 'Традиционный вьетнамский суп.',
      image: foSoupImage
    },
    {
      name: 'Бун Ча',
      description: 'Вкусный суп Бун Ча, сделанный из свинных котлет.',
      image: bunChaImage
    },
    {
      name: 'Кокосовый суп',
      description: 'Суп сделанный из кокосового молока.',
      image: cocoSoupImage
    },
    {
      name: 'Хрустящий блин',
      description: 'Вьетнамский блин с острым соусом.',
      image: crispyBlinImage
    },
    {
      name: 'Жаренный рис',
      description: 'Ароматный жаренный рис с курицей.',
      image: friedRiceImport
    },
    {
      name: 'Чо том',
      description: 'Традиционное блюдо из креветок, приготовленных на гриле.',
      image: choTomImage
    },
    {
      name: 'Бан ми',
      description: 'Вкусный вьетнамский бутерброд.',
      image: banMiImage
    },
    {
      name: 'Салатные роллы',
      description: 'Вкусные роллы из креветок.',
      image: saladRollImage
    }
  ],
  japaneseFood: [
    {
      name: 'Сукияки',
      description: 'Макароны с тонко нарезанными кусочками говядины.',
      image: sukiYakiImage
    },
    {
      name: 'Рамен',
      description: 'Японский суп с лапшой и мясом.',
      image: ramenImage
    },
    {
      name: 'Рис карри',
      description: 'Острый рис с кусочками курицы.',
      image: riceCurryImage
    },
    {
      name: 'Карааге',
      description: 'Вкусная курица в панировке.',
      image: karaageImage
    },
    {
      name: 'Сябу-сябу',
      description: 'Похожее на сукияки, к нему подходит соус для макания.',
      image: syabuSyabuImage
    },
    {
      name: 'Онигири',
      description: 'Блюдо, в которое заворачивают лист сушённых водрослей нори.',
      image: onigiriImage
    },
    {
      name: 'Якигёдза',
      description: 'Японские пельмени, обжаренные в масле',
      image: yakigedzaImage
    },
    {
      name: 'Такояки',
      description: 'Шарики из жидкого теста с начинков из отварного осьминога.',
      image: takoyakiImage
    }
  ],
  italianFood: [
    {
      name: 'Спагетти',
      description: 'Различные итальянские спагетти.',
      image: spagettiImage
    },
    {
      name: 'Пицца',
      description: 'Итальянская пицца с моцареллой.',
      image: pizzaImage
    },
    {
      name: 'Фриттата',
      description: 'Итальянский омлет.',
      image: frittataImage
    },
    {
      name: 'Брускетта',
      description: 'Отличная хлебная закуска.',
      image: bruskettaImage
    },
    {
      name: 'Аранчини',
      description: 'Вкусные шарики из панировки.',
      image: aranchiniImage
    },
    {
      name: 'Антипасто',
      description: 'Набор закуски из мяса, оливок, сыра.',
      image: antipastoImage
    },
    {
      name: 'Карпаччо',
      description: 'Тонко нарезанные кусочки сырой говяжьей вырезки.',
      image: karpachoImage
    },
    {
      name: 'Панини',
      description: 'Итальянские омлеты из ветчины и сыра.',
      image: paniniImage
    }
  ],
});

const openFoodWindow = (foodType) => {
  selectedFood.value = foodType;
  isFoodWindowOpen.value = true;
  sendDataToServer(foodData.value);
};

const closeFoodWindow = () => {
  isFoodWindowOpen.value = false;
  selectedFood.value = '';
};

const logFoodDetails = async (item) => {
  console.log('Вы выбрали блюдо:', item);

  try {
    const response = await axios.post('http://localhost:3000/api/food', { selectedItem: item });
    console.log('Данные отправлены на сервер:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке данных:', error.message);
    console.error('Детали:', error.response ? error.response.data : error);
  }
};

const sendDataToServer = async (foodData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/food', foodData);
    console.log('Данные отправлены на сервер:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
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

.foodItem h4 {
  font-size: 22px;
}

.foodItem {
  width: 290px;
  text-align: center;
}

.foodItem img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>