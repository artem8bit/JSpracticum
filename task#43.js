function maskify(str) {
	return str.length <= 4
		? str
		: "#".repeat(str.length - 4) + str.substr(str.length - 4);
}
console.log(maskify("4556364607935616"));
