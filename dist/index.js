"use strict";
console.log("its working");
// function triple(value) {
//     if (typeof value === "string") {
//         return value.repeat(3); //vlue is definitely a string
//     }
//     return value * 3;
// }
/////////////////////////////////////////
//truthiness gaurd
const el = document.getElementById("idk");
if (el) { //truthiness check
    el;
}
else {
}
const printLetters = (word) => {
    if (word) { //and or type
        for (let char of word) { // truthiness check
            console.log(char);
        }
    }
    else {
        console.log("you shall not pass");
    }
};
function someDemo(x, y) {
    if (x === "y") { ///equality type checking
        x.toUpperCase();
    }
}
const pet = { name: "kitty", age: 5 };
/////////////////////////////////////////////  IN...typescript construct.
function getRuntime(media) {
    if ("numEpisodes" in media) { // numEpisodes which is in only one object narrows
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 160 }));
console.log(getRuntime({ title: "spongeBob", numEpisodes: 12, episodeDuration: 21 }));
function printFullDate(date) {
    if (date instanceof Date) { //  instance of to narrow
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
    }
    else {
    }
}
function getFarmSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "oink!";
        case ("cow"):
            return "mooo!";
        case ("rooster"):
            return "doodle-doooo";
        default:
            ////////should never make it here if handled correctly
            const error = animal; //not handling all cases
            return error; //exhuastive check.
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmSound(stevie));
