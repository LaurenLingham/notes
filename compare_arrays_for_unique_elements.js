function diffArray(arr1, arr2) {
    const newArr = [];

    function uniqueElements(arrX, arrY) {
        for (let i = 0; i < arrX.length; i++) {
            if (!arrY.includes(arrX[i])) {
                newArr.push(arrX[i]);
            }
        }
    }

    uniqueElements(arr1, arr2);
    uniqueElements(arr2, arr1);

    return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));