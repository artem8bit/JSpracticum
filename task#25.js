// Напишите функцию capitalizeFirstLetter(str), которая преобразовывает первый символ строки в верхний регистр.
// Например:
// `let str="пример строки";`
// `function capitalizeFirstLetter(str) {};`

// 1. Написать функцию+
// 2. Преобразовать строку в массив +
// 3. Найти символ с индексом [0]
// 4. Преобразовать найденный символ в верхний регистр
// 5. прибавить к нему оставшиеся элементы начиная с индекса 1
// 6. Преобразовать массив в строку

function capitalizeFirstLetter(str) {
	return str
		.split()
		.map((ch) => ch.charAt(0).toUpperCase() + str.slice(1))
		.join();
}

console.log(capitalizeFirstLetter("i love javascript"));
