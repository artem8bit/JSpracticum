inLowerCase = (str) =>
  str
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? `_` + item.toLowerCase() : item)
    .join("");

console.log(inLowerCase("redevCurses"));
