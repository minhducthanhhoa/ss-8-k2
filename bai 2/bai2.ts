type Person = {
    name:string,
    age:number,
    address: string,
}

function validatePerson(person:any): boolean {
    if (
        typeof person === "object" &&
        typeof person.name === "string"&&
        typeof person.age === "number"&&
        typeof person.address === "string"
    ){
        return true;
    } else{
        return false;
    }
}

let person1: Person = {
    name:"minh thu",
    age:25,
    address:"hn",
}
let person2: Person = {
    name:"hong",
    age:20,
}
let person3: Person = {
    name:"hoa",
    age:30,
    address:"hcm",
}

console.log(validatePerson(person1));
console.log(validatePerson(person2));
console.log(validatePerson(person3));