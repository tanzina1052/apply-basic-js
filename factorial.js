// Factiorial
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// 4! = 1 * 2 * 3 * 4
// 5! 1 * 2 * 3 * 4 * 5
// 6 = 1 * 2 * 3 * 4 * 5 * 6
// 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 
// 8! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8
let factorial = 1;
for(let i = 1; i <= 5; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
}

// To find out factorial using for or while loop is called a iterative method.

function findOutFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i ++) {
        factorial = factorial * i;
    }
    return factorial;
}

let factorialResult = findOutFactorial(5);
console.log(factorialResult);