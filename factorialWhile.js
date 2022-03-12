let factorial = 1;
let i = 1;
while(i <= 10) {
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
    // inside loop, console.log(), code will be continuous or looping
}
// Outside loop, console.log() , code runs one time.
console.log(factorial);

function findOutFactorial(n) {
    let factorial = 1;
    let i = 1;
    while ( i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let factorialResult = findOutFactorial(7);
console.log(factorial);