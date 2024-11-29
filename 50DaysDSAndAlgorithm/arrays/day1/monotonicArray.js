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

const isMonotonic2 = (array) => {
    if (array.length === 0) {
        return true;
    }
    if (array.length === 1) {
        return true;
    }
    const first = array[0];
    const last = array[array.length-1];
    if (first === last) {
        for (let i = 0; i < array.length-1; i++) {
            if (array[i+1] !== array[i]) return false;
        }
    }else if (first<last){
        for (let i = 0; i < array.length-1; i++) {
            if (array[i+1] < array[i]) return false;
        }
    }else {
        //first>last
        for (let i = 0; i < array.length-1; i++) {
            if (array[i+1] > array[i]) return false;
        }
    }
    return true;
}

let arr = [122, 2, 3, 3, 52];
let arr1 = [8, 3, 3, 22, -1];
let arr2 = [3, 3, 3];
console.log(isMonotonic2(arr));
console.log(isMonotonic2(arr1));
console.log(isMonotonic2(arr2));

/*
1, 2, 3, 4, 5
1, 2, 3, 6, 5
5, 4, 3, 2, 1
5, 4, 3, 8, 1
4, 5, 6, 6, 2

*/
