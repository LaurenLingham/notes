function destroyer(arr, ...args) {
    let newArr = [...arr];
    for (const arg of args) {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === arg) {
                newArr.splice(i, 1);
                i--;
            }
        }
    }
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));