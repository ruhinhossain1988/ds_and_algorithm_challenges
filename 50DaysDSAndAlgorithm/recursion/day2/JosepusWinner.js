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
        return  helper(arr, indexToRemove);
    }
    return helper(arr, 0);
};

console.log(findTheWinner1(4, 7))