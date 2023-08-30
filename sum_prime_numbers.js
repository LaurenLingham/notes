function sumPrimes(num) {

    function isPrime(x) {
        const sqrt = Math.sqrt(x);

        for (let i = 2; i <= sqrt; i++) {
          if (x % i === 0)
            return false;
        }
        return true;
    }

    let total = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }

    return total;
}

console.log(sumPrimes(10));