function palindrome(str) {
    let comparisonStr = str.replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    let forwardArr = comparisonStr.split("");
    let backwardArr = [];

    for (let i = 0; i < forwardArr.length; i++) {
        backwardArr.unshift(forwardArr[i]);
    }

    let forwardStr = forwardArr.join("");
    let backwardStr = backwardArr.join("");

    return forwardStr === backwardStr;
}

console.log(palindrome("eye"));
console.log(palindrome("not a palindrome")); 