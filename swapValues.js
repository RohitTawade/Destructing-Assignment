function swapValues(x, y) {
    [x, y] = [y, x]; // Use array destructuring to swap values
    return [x, y];
}

let a = 5;
let b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);

[a, b] = swapValues(a, b);

console.log(`After swap: a = ${a}, b = ${b}`);
