type Square = {
    shape: "square",
    sideLength: number,
}

type Circle = {
    shape: "circle",
    radius: number,
}

type Geometry = Square | Circle;

function calculateArea(shape: Geometry) {
    if(shape.shape === "square"){
        return shape.sideLength ** 2;
    } else if(shape.shape === "circle"){
        return Math.PI * shape.radius ** 2;
    }
}

let square: Square ={
    shape: "square",
    sideLength: 5,
}

let circle: Circle = {
    shape: "circle",
    radius: 3,
}

console.log(calculateArea(square));
console.log(calculateArea(circle));


