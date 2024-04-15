"use strict";
function validatePerson(person) {
    if (typeof person === "object" &&
        typeof person.name === "string" &&
        typeof person.age === "number" &&
        typeof person.address === "string") {
        return true;
    }
    else {
        return false;
    }
}
let person1 = {
    name: "minh thu",
    age: 25,
    address: "hn",
};
let person2 = {
    name: "hong",
    age: 20,
};
let person3 = {
    name: "hoa",
    age: 30,
    address: "hcm",
};
console.log(validatePerson(person1));
console.log(validatePerson(person2));
console.log(validatePerson(person3));
