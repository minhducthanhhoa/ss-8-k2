"use strict";
function calculateArea(shape) {
    if (shape.shape === "square") {
        return shape.sideLength ** 2;
    }
    else if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
let square = {
    shape: "square",
    sideLength: 5,
};
let circle = {
    shape: "circle",
    radius: 3,
};
console.log(calculateArea(square));
console.log(calculateArea(circle));
