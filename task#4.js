const accum = str => str
  .split('')
  .map((ch, i) => (ch = ch.toLowerCase().repeat(i+1)) && ch.charAt().toUpperCase() + ch.slice())
  .join('-');

console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt

