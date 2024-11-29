function sortedSquaredArray1(array) {
    let newArray = new Array(array.length).fill(0);

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] * array[i];
    }
    newArray.sort((a, b) => a - b);
    return newArray;
}

function sortedSquaredArray2(array) {
    if (array.length === 0) {
        return 0;
    }
    if (array.length === 1) {
        return array;
    }

    const newArray = new Array(array.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        const leftSquare = Math.pow(array[pointerLeft], 2);
        const rightSquare = Math.pow(array[pointerRight], 2);
        if (leftSquare > rightSquare) {
            newArray[i] = leftSquare;
            pointerLeft++;
        } else {
            newArray[i] = rightSquare;
            pointerRight--;
        }
    }
    return newArray;
}

let arr = [-12, 5, 2, -3, 10, -15];
let arr2 = [2];
let sortedArray = sortedSquaredArray1(arr);
let sortedArray2 = sortedSquaredArray2(arr2);

for (let i = 0; i < sortedArray2.length; i++) {
    console.log(sortedArray2[i]);
}