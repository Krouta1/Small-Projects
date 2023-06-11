function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n%2==0){
        n=n/2;
    }
    return n==1;

}// Big-O is O(log n) cuz we are dividing by 2 each time 

function isPowerOfTwoBitwise(n) {
    return (n>0) && (n&(n-1))==0;

}// Big-O is O(1) cuz we are doing bitwise operations on the same number
