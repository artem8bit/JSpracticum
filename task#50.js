function moveZeros(arr) {
	let res = arr.filter((el) => el !== 0);
	return res.concat(new Array(arr.length - res.length).fill(0));
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
