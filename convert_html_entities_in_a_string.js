function convertHTML(str) {

    let stringArr = str.split("");

    for (let i = 0; i < stringArr.length; i++) {
        switch (stringArr[i]) {
            case "&":
                stringArr[i] = "&amp;";
                break;
            case "<":
                stringArr[i] = "&lt;";
                break;
            case ">":
                stringArr[i] = "&gt;";
                break;
            case "\"":
                stringArr[i] = "&quot;";
                break;
            case "'":
                stringArr[i] = "&apos;";
                break;
        }
    }
    return stringArr.join("");
}

console.log(convertHTML("Dolce & Gabbana"));