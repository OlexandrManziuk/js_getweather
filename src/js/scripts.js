// const debounce = require('lodash.debounce');
// import cityList from '../json/city.list.json';
// const searchInput = document.querySelector('#js-search');

// // Обрабатываем наше поле поиска и выдаем подсказки
// const inputСorrection = value => {
//   const arr = cityList.map(e => e.name).filter(e => e.indexOf(value) !== -1);
//   if (arr.length <= 5) {
//     console.log(arr);
//   }
// };

// // Слушаем поиск и даем подсказку по названию города
// searchInput.addEventListener(
//   'input',
//   debounce(() => inputСorrection(searchInput.value), 500),
// );
