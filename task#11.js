let invert = str =>
str
.map((item)=> item * (-1)).reverse();

console.log(invert([-1,-2,-4,-5]));
console.log(invert([1,2,4,5]));
console.log(invert([1,-2,4,-5]));