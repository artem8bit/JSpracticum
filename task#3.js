let funcMaxMin = nums => {
    nums = nums.split(' '); // преобразуем в массив элементов по указ-му разделителю
    return `${Math.max(...nums)} ${Math.min(...nums)}`; // возвращаем макс и мин значение "..."- раскрывает массив nums

};


console.log(funcMaxMin('4 5 29 54 4 0 -123 666 -64 1 -3 6 -6'));