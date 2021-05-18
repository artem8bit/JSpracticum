const findNeedle = (str) => {
let l = str.findIndex((item) => item === 'needle');
return `нашел иглу в положении ${l}`};


console.log(findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]));

