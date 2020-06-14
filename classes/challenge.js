"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log("Toooooooooot!");
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Object2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Object2D {
    constructor(base, altura) {
        super(base, altura);
    }
    area() {
        return this.base * this.altura;
    }
}
var retangulo = new Retangulo(5, 7);
retangulo.base = 10;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(value) {
        if (value.length >= 3) {
            this._primeiroNome = value;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
//# sourceMappingURL=challenge.js.map