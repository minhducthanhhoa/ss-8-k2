function parseInput(input:string):number | boolean | string | null | undefined {
    if(input === "number"){
        return 42;
    } else if(input === "boolean"){
        return true;
    } else if(input === "string"){
        return "hello ptit";
    } else if(input === "null"){
        return null;
    } else if(input === "undefined"){
        return undefined;
    }
}

console.log(parseInput("number"));
console.log(parseInput("boolean"));
console.log(parseInput("string"));
console.log(parseInput("null"));
console.log(parseInput("undefined"));