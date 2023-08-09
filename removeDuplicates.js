function removeDuplicates(arr) {
    return new Set(arr);
}

const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueSet = removeDuplicates(inputArray);

console.log("Unique Set:");
console.log(uniqueSet);
