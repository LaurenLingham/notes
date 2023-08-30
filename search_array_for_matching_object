function whatIsInAName(collection, source) {
    let matches = [];

    for (let i = 0; i < collection.length; i++) {
        let foundMismatch = false;

        for (const prop in source) {
            if (collection[i][prop] !== source[prop]) {
                foundMismatch = true;
            }
        }
        if (!foundMismatch) {
            matches.push(collection[i]);
        }
    }
    return matches;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
