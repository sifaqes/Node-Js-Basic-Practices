function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('No se puede dividir por 0');
    } else {
        return x1 / x2;

    }
}

console.log(add(1, 2));
console.log(substract(5, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));