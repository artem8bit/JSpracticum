let countCats = (arr) =>
	arr
		.join(",")
		.split(",")
		.filter((item) => item === "^^").length;

console.log(
	countCats([
		[0, 1, "^^", "^^"],
		[9, "^^", 2],
		["^^", 8, 7],
	])
);
console.log(
	countCats([
		[0, 1],
		[9, 2],
		[8, 7],
	])
);
