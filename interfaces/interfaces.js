"use strict";
function greeting(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Janice";
}
const person = {
    name: "John",
    age: 27,
    greeting(surname) {
        console.log(`Hello, my name is ` + this.name + " " + surname);
    },
};
greeting(person);
changeName(person);
greeting(person);
// greeting({ name: "John", age: 27, height: 1.75, });
person.greeting("Snow");
/*
  With Classes
*/
class Client {
    constructor() {
        this.name = "";
        this.lastBuy = new Date(); // We can add more features
    }
    greeting(surname) {
        console.log(`Hello, my name's ${this.name} ${surname}`);
    }
}
const myClient = new Client();
myClient.name = "Han";
myClient.greeting("Solo");
console.log(myClient.lastBuy);
const potency = function (base, exp) {
    return Math.pow(base, exp);
};
/*
  Legend

  extends: Classes < Classes || Interfaces < Interfaces
  implements: Classes < Interfaces
*/
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
x.log();
const cli = {
    name: "Pedro",
    toString() {
        return this.name;
    },
};
cli.log();
//# sourceMappingURL=interfaces.js.map