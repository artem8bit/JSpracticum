
const reverseString = str =>
str.split(" ")
.map((item) => item.split("").reverse().join(""))
.join(" ");

console.log(reverseString("This is an example!"));




