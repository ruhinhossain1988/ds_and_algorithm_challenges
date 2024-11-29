const isMonotonic = function (array){
    let increasing = true;
    let decreasing = true;

    if (array.length === 0) {
        return true;
    }
    if (array.length === 1) {
        return true;
    }

    for (let i = 0; i < array.length-1; i++) {
        if (array[i] > array[i+1]) {
            increasing = false;
        }

        if (array[i] < array[i+1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
}

let arr = [1, 2, 3, 3, 5];
let arr1 = [8, 3, 3, 2, -1];
console.log(isMonotonic(arr));
console.log(isMonotonic(arr1));

/*
1, 2, 3, 4, 5
1, 2, 3, 6, 5
5, 4, 3, 2, 1
5, 4, 3, 8, 1
4, 5, 6, 6, 2

*/
