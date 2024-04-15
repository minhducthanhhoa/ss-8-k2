function squareNumberOrArray(input:number|number[]) {
    if(typeof input === "number"){
        return input ** 2;
    } else if(Array.isArray(input)) {
        return input.map((num) => num ** 2);
    }
}

console.log(squareNumberOrArray(5));
console.log(squareNumberOrArray([1,2,3,4,5,6,7,8]));

    