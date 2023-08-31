function addTogether() {
    const [a, b] = arguments;

    if (typeof (a) === "number") {
        if (typeof (b) === "number") return a + b;
        if (arguments.length === 1) return (b) => addTogether(a, b);
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(2));