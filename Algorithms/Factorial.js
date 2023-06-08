 function Factorial (n){
     let result = 1
    for( let i = 2; i <= n;i++){ // starting at two cuz multiply by 1 has no effect
        result = result * i 
    }
    return result
 } // Big O is 0(n)