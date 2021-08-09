function comparison(str1, str2) {
	let comp = str1.toUpperCase() === str2.toUpperCase();
	return comp;
}

console.log(comparison("string", "STring"));
console.log(comparison("str", "STring"));
console.log(comparison("abdf", "ABdf1"));
