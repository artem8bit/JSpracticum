function deleteTrolle(str) {
  const vomels = "аоуеыиюАОУЕЫИЮ";

  const splittedVomels = vomels.split("");

  return str
    .split("")
    .filter((item) => splittedVomels.indexOf(item) === -1)
    .join("");
}

console.log(deleteTrolle("Этот сайт для неудачников, лол!!!"));
