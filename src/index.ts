console.log("its working")

// function triple(value) {
//     if (typeof value === "string") {
//         return value.repeat(3); //vlue is definitely a string
//     }
//     return value * 3;
// }


/////////////////////////////////////////

//truthiness gaurd

const el =  document.getElementById("idk")
 if(el) {                                       //truthiness check
    el 
 }else {

 }

 const printLetters = (word?: String) => {
    if (word) {                              //and or type
for(let char of word) {                       // truthiness check
console.log(char);
  }
 } else{
 console.log("you shall not pass")
 }
};


function someDemo (x: string | number,  y:string | boolean) {
    if (x === "y") {                                    ///equality type checking
        x.toUpperCase();
    }
}

const pet = {name: "kitty", age:5}

interface Movie {
    title: string;
    duration: number;
}

interface TvShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}
/////////////////////////////////////////////  IN...typescript construct.
function getRuntime(media: Movie | TvShow) {
  if("numEpisodes" in media){                  // numEpisodes which is in only one object narrows
   return media.numEpisodes * media.episodeDuration
  }
  return media.duration;
}
console.log(getRuntime({title: "Amadeus", duration: 160}));
console.log(getRuntime({title: "spongeBob", numEpisodes: 12, episodeDuration: 21}));


function printFullDate(date: string | Date) {
    if(date instanceof Date) {                   //  instance of to narrow
        console.log(date.toUTCString());
    }else{
       console.log(new Date(date).toUTCString()) ;
    }
}

class User {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
if(entity instanceof User) {
}
 else{
}
}

interface Cat {
    name: string;
    numLives: number;
}
interface Dog {
    name: string;
    breed: string;
}

// function isCat(animal: Cat | Dog): animal is Cat {      //animal is cat..Predicator return type
//     return (animal as Cat).numLives ! == undefined;
// }

// function makeNoise(animal: Cat | Dog): string {
// if(isCat(animal)) {
//     animal
//     return "Meow"
// }else{
//         animal
//     }
// }

//////////////////////////////////////////////////////////
///discriminated unions

interface Rooster {
    name:string;
    age: number;
    weight: number;
    kind: "rooster";       ///////////set to literal type to compare with switch
}
interface Cow {
    name:string;
    age: number;
    weight: number;
    kind: "cow";           //////////////////////////
}
interface Pig {
    name:string;
    age: number;
    weight: number;
    kind: "pig";                      //////////////////////////////////////
}


type FarmAnimal = Pig | Rooster | Cow;

function getFarmSound (animal: FarmAnimal) {
    switch(animal.kind) {
        case("pig"):
          return "oink!";
        case("cow"):
          return "mooo!";
        case("rooster"):
          return "doodle-doooo";
          default:
            ////////should never make it here if handled correctly
            const error: never = animal   //not handling all cases
            return error;     //exhuastive check.
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};

  console.log (getFarmSound(stevie));














