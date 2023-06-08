function Fibonacci (n){
    const fib = [0,1] // define first 2 elements of Arr
    // forLoop needs to start at 2, cuz i need to add it to arr [0,1,....]
    for( let i =2; i<= n; i++){
        fib[i] = fib[i - 2] + fib[i - 1] 
    // n=2    fib[2]= fib[0] + fib[1]
    }
    return fib
} // Big-O complexity 0(n) cuz for loop has complexity n

//expected output is Fibonacci(2) [0,1]
//expected output is Fibonacci(3) [0,1,1]
//expected output is Fibonacci(4) [0,1,1,2]
//expected output is Fibonacci(7) [0,1,1,2,3,5,8]
// sorry for some czech
// Každé číslo je součtem předchozích dvou čísel :)