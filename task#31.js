let str = "Сила тяжести приложена к центру масс тела";
function cutString(str, n) {
	return str.split(" ").splice(0, n).join(" ");
}
console.log(cutString(str, 5));
console.log(cutString(str, 1));
console.log(cutString(str, 4));
console.log(cutString(str, 0));
