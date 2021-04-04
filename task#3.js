



let func = nums => {
    nums = nums.split (' '); // образуем массив
    return `${Math.max (...nums)} ${Math.min (...nums)}`; // ищем


};



console.log(func('4 5 29 54 0 -123 666 -64 1 -3 6 -6'));







