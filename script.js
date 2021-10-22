const inputNumber = document.querySelector("#input-number")
const odd = document.querySelector('#odd')
const even = document.querySelector('#even')
const primary = document.querySelector('#primary')
const reset = document.querySelector('#reset')
const showNumber = document.querySelector('#show-number')

// Prime Number
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

const printOddNumber = (n) => {
    let odd = []
    for(i = 1; i <=n ; i++) {
        if(i % 2 == 1) {
            odd.push(i)
        }
    }
    return odd
}

const printEvenNumber = (n) => {
    let even = []
    for( i = 1; i <= n; i++) {
        if( i % 2 == 0) {
            even.push(i)
        }
    }
    return even
}

odd.addEventListener('click', () => {
    let number = '<h1>Odd Number</h1>'
    printOddNumber(inputNumber.value).forEach(n => number += `<p>${n}</p>`)
    showNumber.innerHTML = number
})
even.addEventListener('click', () => {
    let number = '<h1>Even Number</h1>'
    printEvenNumber(inputNumber.value).forEach(n => number += `<p>${n}</p>`)
    showNumber.innerHTML = number
})
primary.addEventListener('click', () => {
    let number = '<h1>Prime Number</h1>'
    printPrimeNumber(inputNumber.value).forEach(n => number += `<p>${n}</p>`)
    showNumber.innerHTML = number
})
reset.addEventListener('click', () => {
    let number = '<h1>Odd, Even, & Prime</h1>'
    showNumber.innerHTML = number
    inputNumber.value = null
})
