let str = "abc def ghi jkl mno qpr stu";
let str1 = "abc";
String.prototype.startWith = function (str) {
	if (str.length > this.length) return false;
	return this.substr(this.length - str.length) === str;
};

console.log(str.startsWith(str1));
console.log(str.startsWith("cde"));
