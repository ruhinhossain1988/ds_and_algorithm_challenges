function generatePermutations(str, result, permutationList) {
    // Base case: if the string is empty, add the result to permutations
    if (str.length === 0) {
        permutationList.push(result);
        return;
    }

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        let ch = str[i]; // Current character
        let remaining = str.slice(0, i) + str.slice(i + 1); // Remaining string after removing ch
        generatePermutations(remaining, result + ch, permutationList); // Recursive call
    }
}

function main() {
    let permutations = []; // List to hold the permutations
    generatePermutations("abc", "", permutations); // Generate permutations for "abc"
    console.log(permutations); // Print all permutations
}

main();