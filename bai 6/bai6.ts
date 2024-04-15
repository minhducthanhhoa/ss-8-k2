function processstringOrArray(input:string|string[]):void {
    if(typeof input === "string"){
        console.log(input);
    } else if(Array.isArray(input)){
        input.forEach((item) => console.log(item));
    }
}

processstringOrArray("hello");
processstringOrArray(["minh thu","hong","hoa","hue"]);