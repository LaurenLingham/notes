const totalCash = (cid) => {
    let total = 0;

    for (let i = 0; i < cid.length; i++) {
        total += cid[i][1];
    }

    return total;
};

function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;

    let result = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    };

    if (totalCash(cid) < changeDue) {
        return result;
    }

    if (totalCash(cid) === changeDue) {
        result.status = "CLOSED";
        result.change = cid;
        return result;
    }

    const values = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        "ONE HUNDRED": 100
    }

    for (let i = cid.length - 1; i >= 0; i--) {
        const unit = cid[i][0];
        const unitValue = values[unit];

        if (changeDue < unitValue) {
            continue;
        }

        let unitQuotient = Math.floor(changeDue / unitValue);

        const maxQuantityOfUnit = unitQuotient * unitValue;
        const unitTotal = cid[i][1];

        let unitArr;

        if (maxQuantityOfUnit <= unitTotal) {
            unitArr = [unit, maxQuantityOfUnit];
        } else {
            unitArr = [unit, unitTotal];
        }

        changeDue -= unitArr[1];

        changeDue = Math.round((changeDue + Number.EPSILON) * 100) / 100;

        result.change.push(unitArr);
    }

    if (changeDue === 0) {
        result.status = "OPEN";
    } else {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    }

    return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
