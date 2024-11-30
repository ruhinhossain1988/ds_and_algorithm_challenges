let findTheWinner1 = function (n, k) {
    let arr = Array.from({length: n}, (_, i) => i + 1);

    function helper(arr, startIndex) {
        //base cae
        if (arr.length === 1) {
            return arr[0];
        }
        //recursive case
        let indexToRemove = (startIndex + k - 1) % arr.length;
        arr.splice(indexToRemove, 1);
        return helper(arr, indexToRemove);
    }

    return helper(arr, 0);
};

let findTheWinner2 = function (n, k) {
    function josephus(n) {
        //base cae
        if (n === 1) {
            return 0;
        }
        //recursive case
        return (josephus(n - 1) + k) % n;
    }
    return josephus(n) + 1;
};

let findTheWinner3 = function (n, k) {
    let survivor = 0;
    for (let i = 2; i <=n; i++) {
        survivor = (survivor + k) % i;
    }
    return survivor + 1;
}

console.log(findTheWinner1(4, 7))
console.log(findTheWinner2(4, 7))
console.log(findTheWinner3(5, 2))

/*
Pseudocode for the approach2
Function josephus(n, k):
If n == 1:
Return 0    // Base case: survivor is at position 0
Else:
    survivor = josephus(n - 1, k)  // Solve for smaller group
Adjust position: (survivor + k) % n
Return survivor

Function main:
    Input: n (number of people), k (step size)
survivor = josephus(n, k) + 1    // Convert to 1-based index
Return survivor*/
