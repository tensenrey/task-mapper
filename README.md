# JS mapper

Задача: из объекта users сделать массив users, где каждый объект имеет следующую структуру

```js
{
  name: 'Fedor', // ключ объекта с заглавной буквы
  age: 20, // возраст без изменений
  gender: 'male', // oleg, fedor — 'male', natasha — 'female', остальные имена 'unknown', 
  info: {
    lastUpdate: 'Mon, 01 Nov 2021 00:10:21 GMT' // дата в формате UTC string
    // все остальные поля без изменений
  }
}
```
