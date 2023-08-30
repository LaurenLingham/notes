function sumFibs(num) {
    let fibNums = [0, 1];

    for (let i = 1; i <= num; i++) {
        if (i === fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]) {
            fibNums.push(i);
        }
    }

    let numsToAdd = fibNums.filter(num => num === 0 || num % 2 !== 0);
    
    let total = 0;
    
    numsToAdd.forEach(num => total += num);

    return total;
}

console.log(sumFibs(50));