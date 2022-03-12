// Recursive factorial



for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let i = 10;
while(i >= 1) {
    console.log(i);
    i--;
}

// 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// 0! = 1
// 2! = 1 * 2
// 3! = 2! * 3
// 4! = 3! or (4 -1)! * 4
// 5! = 4! or (5 - 1)! * 5
//  6! = 5! or (6-1)! * 6
// 7! = 6! or (7 - 1)! * 7
// n! = (n-1)! * n

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

let factorialResult = factorial(10);
console.log(factorialResult);