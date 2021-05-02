let pallindrom = str => {
    str.toLowerCase();
    return str == str.split('').reverse().join('');
};

console.log(pallindrom('паллиндром'));//казалось бы...
console.log(pallindrom('таратарат'));