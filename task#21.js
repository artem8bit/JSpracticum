function createDreamTeam(str) {
	return str.map((item) => item.charAt(0).toUpperCase()).join("");
}

console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));
//???????
