const sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(3)(4)(2)(5)()); //14

console.log(sum(3)(4)(1)()); //8
