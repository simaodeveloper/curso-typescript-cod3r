"use strict";
// class Data {
//   // public by default
//   day: number;
//   public month: number;
//   year: number;
//   constructor(day: number = 1, month: number = 1, year: number = 1970) {
//     this.day = day;
//     this.month = month;
//     this.year = year;
//   }
// }
// const birthDate = new Data(3, 11, 1991);
// birthDate.day = 4;
// console.log(birthDate.day);
// console.log(birthDate);
// const wedding = new Data();
// wedding.year = 2017;
// console.log(wedding);
// /*
//   2º Example
// */
// class DataSmart {
//   constructor(
//     public day: number = 1,
//     public month: number = 1,
//     public year: number = 1970
//   ) {}
// }
// const birthDateSmart = new Data(3, 11, 1991);
// birthDateSmart.day = 4;
// console.log(birthDateSmart.day);
// console.log(birthDateSmart);
// const weddingSmart = new DataSmart();
// weddingSmart.year = 2017;
// console.log(weddingSmart);
/*
  1º Challenge
*/
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    resume() {
        return `${this.name} costs R$${this.priceWithDiscount()} (${this.discount * 100}% OFF)`;
    }
    priceWithDiscount() {
        return Number((this.price * (1 - this.discount)).toFixed(2));
    }
}
const p1 = new Product("Apple", 2.99);
const p2 = new Product("Flour", 4.3, 0.25);
console.log(p1.resume());
console.log(p2.resume());
/*
  Access Modifiers
*/
class Car {
    constructor(brand, model, maxVelocity = 200) {
        this.brand = brand;
        this.model = model;
        this.maxVelocity = maxVelocity;
        this.actualVelocity = 0;
    }
    changeVelocity(delta) {
        const newVelocity = this.actualVelocity + delta;
        const isVelocityValid = newVelocity >= 0 && newVelocity <= this.maxVelocity;
        if (isVelocityValid) {
            this.actualVelocity = newVelocity;
        }
        else {
            this.actualVelocity = delta > 0 ? this.maxVelocity : 0;
        }
        return this.actualVelocity;
    }
    accelerate() {
        return this.changeVelocity(5);
    }
    reduce() {
        return this.changeVelocity(-5);
    }
}
const car1 = new Car("Ford", "Ka", 185);
/*
  Inheritage
*/
class Ferrari extends Car {
    constructor(model, maxVelocity) {
        super("Ferrari", model, maxVelocity);
    }
    accelerate() {
        return this.changeVelocity(20);
    }
    reduce() {
        return this.changeVelocity(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.brand} ${f40.model}`);
console.log(f40.accelerate());
console.log(f40.accelerate());
console.log(f40.accelerate());
console.log(f40.reduce());
console.log(f40.reduce());
console.log(f40.reduce());
/*
  Getters and Setters
*/
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
const person1 = new Person();
person1.age = 10;
console.log("Person", person1.age);
person1.age = -3;
console.log("Person", person1.age);
/*
  Static Members
*/
class Matematica {
    static circuloArea(raio) {
        return Matematica.PI * Math.pow(raio, 2);
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.circuloArea(4));
/*
  Abstract Class
*/
class X {
    w(b) {
        console.log(b);
    }
}
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
/*
  Private Constructor and Singleton
*/
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
console.log(Unico.getInstance().agora());
/*
  Attributes read-only
*/
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = "DC-8";
// turboHelice.prefixo = "PT-DEF";
console.log(turboHelice);
//# sourceMappingURL=classes.js.map