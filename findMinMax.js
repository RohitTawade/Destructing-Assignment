function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

const inputArray = [5, 2, 7, 1, 9];
const result = findMinMax(inputArray);

console.log("Maximum and Minimum Values:");
console.log(result);
