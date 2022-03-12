//A Prime number or not a pirme number
// a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
// "prime numbers are very useful in cryptography"

let number = 13;
for (let i = 2; i < number; i++) {
    // console.log(i, number % i);
    if (number % i == 0) {
        console.log("not a prime number");
        break;
    }  
}
console.log("Your number is a prime number");



function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "not a prime number";
        }
    }
    return "Your number is a prime number";
}
let primeResult = isPrime(13);
console.log(primeResult);

