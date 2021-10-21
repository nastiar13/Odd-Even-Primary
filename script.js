const isPrime = ( n ) => {
    for(let i = 2; i <= n/2; i++) {
        if(n % i == 0 && n != 2) {
            return false
        }
    }
    return true
}

const printPrimeNumber = (n) => {
    if( n < 2) {
        return "Number must be more than 1!"
    }
    let arr = []
    for(let i = 2; i <= n; i++) {
        if( isPrime(i) ) {
            arr.push(i)
        }
    }
    return arr
}

let prime = printPrimeNumber(10)
console.log(prime)