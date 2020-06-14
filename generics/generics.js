"use strict";
function echo(object) {
    return object;
}
console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ name: "João", age: 27 }).length);
/*
  Generics
*/
function echoSmart(object) {
    return object;
}
console.log(echoSmart("João").length);
console.log(echoSmart(27));
console.log(echoSmart({ name: "João", age: 27 }));
/*
  With Arrays
*/
const avalicacoes = [10, 9.3, 7.7];
avalicacoes.push(8.4);
// avalicacoes.push("5.5");
console.log(avalicacoes);
function imprimir(args) {
    args.forEach((element) => console.log(element));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["1", "2", "3"]);
imprimir([
    { nome: "Fulano", idade: 22 },
    { nome: "Cicrano", idade: 23 },
    { nome: "Beltrano", idade: 24 },
]);
imprimir([
    { nome: "Fulano", idade: 22 },
    { nome: "Cicrano", idade: 23 },
    { nome: "Beltrano", idade: 24 },
]);
const chamarEcho = echoSmart;
console.log(chamarEcho("Alguma coisa"));
/*
  With Classes
*/
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, "Opa").executar());
// console.log(new OperacaoBinaria({}, {}).executar());
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
/*
  Desafio Classe Fila
  Atributo: fila (Array)
  métodos: entrar, proximo, imprimir
*/
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(value) {
        this.fila.push(value);
    }
    proximo() {
        if (this.fila.length === 0) {
            return null;
        }
        const primeiro = this.fila[0];
        this.fila.splice(0, 1);
        return primeiro;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
class Mapa {
    constructor(...args) {
        this.itens = [];
        this.itens = args;
    }
    obter(chave) {
        const elemento = this.itens.filter((item) => item.chave === chave);
        return elemento ? elemento[0] : null;
    }
    colocar(item) {
        const elemento = this.obter(item.chave);
        if (elemento) {
            elemento.valor = item.valor;
        }
        else {
            this.itens.push(item);
        }
    }
    imprimir() {
        console.log(JSON.stringify(this.itens, null, 2));
    }
    limpar() {
        this.itens = [];
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
console.log();
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map