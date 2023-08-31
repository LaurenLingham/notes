function convertToRoman(num) {
    const romanNumerals = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    let keys = Object.keys(romanNumerals).reverse();
    let result = "";

    for (let i = 0; i < keys.length; i++) {
        const value = parseInt(keys[i]);
        while (num >= value) {
            result += romanNumerals[value];
            num -= value;
        }
    }

    return result;
}

console.log(convertToRoman(3549));
console.log(convertToRoman(9999));
