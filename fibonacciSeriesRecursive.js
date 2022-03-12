// Return Fibonacci Series in a Recursive Way
// [0, 1, 1, 2, 3, 5, 8, 13,21, 34]

function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        // Calculate array nth element
        // previous Element
        let fibo = fibonacci(n - 1); 
        let nextElement = fibo[n - 1] + fibo[ n - 2];
        fibo.push(nextElement);
         return fibo;
    }
   
}

let result = fibonacci(10);
console.log(result);

// fab = fibonacci(10 -1) = 9;
// nth = 10th Element;
// nextElement = fibo[n-1] + fibo[n-2] = fibo[10 -1] + fibo[10-2] = fibo[17]
