removeDuplicate = (str) => {
	let splittedString = str.split(",");
	let result = [];
	for (let i = 0; i < splittedString.length; i++) {
		if (result.indexOf(splittedString[i]) === -1)
			result.push(splittedString[i]);
	}

	return (result = result.join(","));
};

console.log(removeDuplicate("вишня, груша, слива, груша"));
