"use strict";
// Non explicity types
let nome = "Daniel"; // string
let age = 29; // number
let isMan = true; // boolean
// Non explicity type 'any'
let anyType; // any
anyType = "string"; // string
anyType = 29; // number
anyType = false; // boolean
// explicity type
let str = "Daniel";
let yearOld = 29;
let bool = false;
// type: Array
// create a list of strings
let stringList = ["1", "2", "3"];
// create a list of numbers
let numberList = [1, 2, 3];
// or any
let anyList = ["1", 2, true];
// type: Tuple
// create a tuple with a string and number
let tuple = ["Street", 55];
// type: Enums
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
    Color[Color["Orange"] = 11] = "Orange";
    Color[Color["Yellow"] = 12] = "Yellow";
    Color[Color["Red"] = 100] = "Red";
})(Color || (Color = {}));
let myColor = Color.Green;
// Type: any
let car = "BMW";
car = { brand: "BMW", year: "2019" };
// Function types on parameters and return
function getName() {
    return nome;
}
console.log(getName());
function sayHi() {
    console.log("Hi");
    // return age;
}
sayHi();
function multiply(nA, nB) {
    return nA * nB;
}
console.log(multiply(5, 10));
// type: Function
// you can put any alias for parameters
let calculate;
calculate = multiply;
console.log(calculate(3, 3));
// type: Object
let user = {
    name: "Daniel",
    age: 29,
};
// 1
let employee = {
    supervisors: ["Daniel", "Leonardo", "Juliana"],
    startWork(hours) {
        if (hours <= 8) {
            return "Ponto normal";
        }
        return "Fora do horário";
    },
};
let employee2 = {
    supervisors: ["Daniel", "Leonardo", "Juliana"],
    startWork(hours) {
        if (hours <= 8) {
            return "Ponto normal";
        }
        return "Fora do horário";
    },
};
// Union Types
let nota = 10;
// type: Never
// When the function don't continue the flow
// for example throw an error or occur a infinit loop
function fail(msg) {
    throw new Error(msg);
}
const product = {
    name: "soap",
    price: -1,
    validate() {
        if (!this.name || this.name.trim().length == 0) {
            fail("Need have the name");
        }
        if (this.price <= 0) {
            fail("Invalid price");
        }
    },
};
// product.validate();
// type: null
let opcionalHeight = 12;
const contact1 = {
    name: "Fulano",
    phone: "4561324567",
    cellphone: null,
};
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=types.js.map