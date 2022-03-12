// fibonacci in iterative way
let fibo = [0, 1];
// fibo[2] = fibo[2 - 1] + fibo[2 - 2];
// fibo[3] = fibo[3 - 1] + fibo[3 - 2];
// fibo[4] = fibo[4 - 1] + fibo[4 - 2];
// fibo[5] = fibo[5 - 1] + fibo[5 - 2];
// fibo[n] = fibo[n - 1] + fibo[n - 2];
// fibo[i] = fibo[i -1] + fibo[i - 2];
for (let i = 2; i <= 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[ i- 2 ];
    // console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
}
console.log(fibo);

// let i = 2;
// while (i <= 5) {
//     fibo[i] = fibo[i- 1] + fibo[i - 2];
//     i++;
// }

// console.log(fibo);

function fibonacci(n) {
    fibo= [0, 1];
    for (let i = 2; i <= n; i ++) {
        fibo[i] = fibo[i - 1] + fibo[i -2];
    }
    return fibo;
}

let fiboResult = fibonacci(10);
console.log(fiboResult);