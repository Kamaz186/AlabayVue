const express = require('express');
const app = express();
const port = 3000;

// Убедитесь, что сервер может обрабатывать JSON
app.use(express.json());

// Обработчик POST запроса
app.post('/api/food', (req, res) => {
    const foodData = req.body;
    if (foodData.selectedItem) {
        console.log('Получено конкретное блюдо:', foodData.selectedItem);
    } else {
        console.log('Получены данные с клиента:', foodData);
    }
    res.json({ message: 'Данные успешно получены' });
});

app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});
