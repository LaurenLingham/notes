function sumAll(arr) {
    let result = 0;

    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            result += i;
        }
    } else {
        for (let i = arr[1]; i <= arr[0]; i++) {
            result += i;
        }
    }
    return result;
}

console.log(sumAll([1, 4]));