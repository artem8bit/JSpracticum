function isUpperCase(str, character) {
	if (str[character] === str[character].toUpperCase()) {
		return true;
	} else if (str[character] === str[character].toLowerCase()) {
		return false;
	}
}

console.log(isUpperCase("tasks JavaScript", 6)); //true
console.log(isUpperCase("tasks JavaScript", 11)); // false
console.log(isUpperCase("tasks JavaScript", 0)); // false
