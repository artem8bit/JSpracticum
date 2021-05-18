let minLength= str => 
str             
  .split(' ') //преобразовываем строку в массив
  .sort((a,b) => a.length - b.length) // сортируем длины элементов массива от меньшего к большему 
  [0].length // возвращаем первый отсортированный элемент
  

console.log( minLength("redev courses is cool"))       // 2
console.log(minLength("I am learn JS"))  // 1

