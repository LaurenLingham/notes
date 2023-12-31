const squareList = arr => {
    return arr
        .filter(num => num % 1 === 0 && num > 0)
        .map(num => num * num);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
