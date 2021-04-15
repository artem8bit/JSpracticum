// const accum = (str) =>
//   str
//     .split("")
//     .map(
//       (a, i) =>
//         (a = a.toLowerCase().repeat(i + 1)) &&
//         a.charAt(0).toUpperCase() + a.slice(1)
//     )
//     .join("-");


//первый символ делаем прописным
const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)

const accum = (str) => str
  .split('') // разбиваем исходную строку на массив по символу
  .map((word, i) => capitalizeFirstLetter(Array(i+2).join(word).toLowerCase()))
  .join('-'); // объединяем полученные фрагменты (элементы массива)

// map(...) - копируем символ `i+2` раза, т.к. индекс массива начинается с 0, 
// приводим все к нижнему регистру, а потом первый символ к верхнему

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt")); 
