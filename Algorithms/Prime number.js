function isPrime (n) {
    if ( n < 2 ){
        return false
    }
    for ( let i = 2 ; i < n; i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
    
}// Big o is O(n)

//  3 % 2 = 1 so it works
//  4 % 2 = 0  works
// 5 % 2 = 1; 5 % 3 = 2; 5 % 4 = 1 works

// there is another solution 

function isPrime2 (n) {
    if ( n < 2 ){
        return false
    }
    for ( let i = 2 ; i <= Math.sqrt(n); i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
    
} //Big-O is O(sqrt(n))