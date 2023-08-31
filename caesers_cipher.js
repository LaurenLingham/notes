function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        const charCode = char.charCodeAt(0);
        const offset = charCode < 78 ? 13 : -13;
        return String.fromCharCode(charCode + offset);
      });
}

console.log(rot13("EBG13"));
