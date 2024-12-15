export default defineEventHandler(async (event) => {
    const foodData = {
        fastFood: [
            { name: 'Картофель фри', description: 'Хрустящий картофель фри.', image: '/images/potatoe-free.svg' },
            { name: 'Мясной бургер', description: 'Сочный бургер с говядиной и сыром.', image: '/images/burger.svg' },
            { name: 'Нагетсы', description: 'Хрустящие куриные нагетсы с золотистой корочкой.', image: '/images/naggets.svg' },
            { name: 'Добрый кола', description: 'Освежающий газированный напиток с ярким вкусом колы.', image: '/images/cola.svg' },
        ],
        russianFood: [
            { name: 'Борщ', description: 'Традиционный русский борщ.', image: '/images/borsh.svg' },
            { name: 'Окрошка', description: 'Вкусная окрошка под квас.', image: '/images/okroshka.svg' },
            { name: 'Щи', description: 'Традиционный суп "Щи".', image: '/images/soup-shi.svg' },
            { name: 'Солянка', description: 'Классическая солянка под сметану.', image: '/images/solyanka.svg' },
        ],
        vietnamFood: [
            { name: 'Фо', description: 'Традиционный вьетнамский суп.', image: '/images/soup-fo.svg' },
            { name: 'Бун Ча', description: 'Вкусный суп Бун Ча, сделанный из свинных котлет.', image: '/images/bun-cha.svg' },
            { name: 'Кокосовый суп', description: 'Суп сделанный из кокосового молока.', image: '/images/soup-coco.svg' },
            { name: 'Хрустящий блин', description: 'Вьетнамский блин с острым соусом.', image: '/images/cryspi-blin.svg' },
        ],
        japaneseFood: [
            { name: 'Сукияки', description: 'Макароны с тонко нарезанными кусочками говядины.', image: '/images/sukiyaki.svg' },
            { name: 'Рамен', description: 'Японский суп с лапшой и мясом.', image: '/images/ramen.svg' },
            { name: 'Рис карри', description: 'Острый рис с кусочками курицы.', image: '/images/curry-rice.svg' },
            { name: 'Карааге', description: 'Вкусная курица в панировке.', image: '/images/kaarage.svg' },
        ],
        italianFood: [
            { name: 'Спагетти', description: 'Различные итальянские спагетти.', image: '/images/spagetti.svg' },
            { name: 'Пицца', description: 'Итальянская пицца с моцареллой.', image: '/images/pizza.svg' },
            { name: 'Фриттата', description: 'Итальянский омлет.', image: '/images/frittata.svg' },
            { name: 'Брускетта', description: 'Отличная хлебная закуска.', image: '/images/brusketta.svg' },
        ]
    };

    const { foodType } = event.context.params;

    if (foodData[foodType]) {
        return foodData[foodType];
    } else {
        return [];
    }
});
