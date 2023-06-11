function recursiveFibonacci (n){
    if (n < 2){
        return n // base case F0 = 0 and F1 = 1, must be here to stop infinit loop
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}