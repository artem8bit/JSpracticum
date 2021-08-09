let str = "abc def ghi jkl mno qpr stu";

String.prototype.startWith = function (str) {
	if (str.length > this.length) return false;
	return this.substr(this.length - str.length) === str;
};

console.log(str.startsWith("abc"));
console.log(str.startsWith("cde"));
