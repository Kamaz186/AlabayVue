// server/api/food.js
export default defineEventHandler(async (event) => {
  if (event.req.method === 'POST') {
    // Чтение тела запроса
    const body = await readBody(event);

    // Логирование или обработка данных
    console.log(body);

    // Ответ
    return { message: 'Данные успешно получены', data: body };
  } else {
    return { message: 'Метод не поддерживается' };
  }
});