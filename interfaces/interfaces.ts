interface Human {
  name: string;
  age?: number; // optional property
  [prop: string]: any; // dinamic property
  greeting(surname: string): void;
}

function greeting(person: Human) {
  console.log("Hello, " + person.name);
}

function changeName(person: Human) {
  person.name = "Janice";
}

const person: Human = {
  name: "John",
  age: 27,
  greeting(surname: string): void {
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
class Client implements Human {
  name: string = "";
  lastBuy: Date = new Date(); // We can add more features
  greeting(surname: string): void {
    console.log(`Hello, my name's ${this.name} ${surname}`);
  }
}

const myClient = new Client();
myClient.name = "Han";
myClient.greeting("Solo");
console.log(myClient.lastBuy);

/*
  With Functions
*/

interface FunctionCalc {
  (a: number, b: number): number;
}

const potency: FunctionCalc = function (base: number, exp: number): number {
  return Math.pow(base, exp);
};

/*
  With Inheritage
*/
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

/*
  Legend

  extends: Classes < Classes || Interfaces < Interfaces
  implements: Classes < Interfaces
*/

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

/*
  With Object Extends
*/

interface Object {
  log(): void;
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
