const arrayDiff = (a, b) => 
    a.filter(item => !b.includes(item)); // а фильтр : не равен тому что содержиться в а и имеется в  b

console.log(arrayDiff([1,2,], [1]));
console.log(arrayDiff([1,2,2,2,3],[2]));