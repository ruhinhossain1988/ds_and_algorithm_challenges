let kthGrammar = function (n, k) {
    //Write code here
    /*
    0
    01
    0110
    011110
     */
    //Base case
    if (n === 1) {
        return 0;
    }

    //Recursive case, n=3, length = 4, mid=length/2=2
    let length = Math.pow(2, n - 1);
    let mid = length / 2;
    if (k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        return 1 - kthGrammar(n - 1, k - mid);
    }
}

console.log(kthGrammar(4, 5));