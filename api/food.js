export default function (req, res) {
    if (req.method === 'POST') {
      const foodData = req.body;  // Данные, которые отправляются из вашего фронта
  
      // Тут можно обработать данные, например, сохранить их в базе данных
  
      // Отправляем ответ обратно клиенту
      res.status(200).json({ message: 'Данные успешно получены' });
    } else {
      res.status(405).json({ message: 'Метод не поддерживается' });  // Если метод не POST
    }
  }
  