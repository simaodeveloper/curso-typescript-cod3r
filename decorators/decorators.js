"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + " " + obj.b);
    };
}
function logarObjeto(constructor) {
    console.log("carregando...");
    return class extends constructor {
        constructor(...args) {
            console.log("antes...");
            super(...args);
            console.log("depois...");
        }
    };
}
// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "Teste", b: 123 })
// @logarObjeto // modificando constructor/classe
// @imprimivel // adding a method
class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
}
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
/*
  Desafio
*/
let usuarioLogado = {
    nome: "Guilherme Filho",
    email: "guigui@gmail.com",
    admin: true,
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado.admin) {
                throw new Error("Sem permissão!");
            }
        }
    };
}
/*
  Decorator para métodos
*/
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo.toFixed(2);
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5000);
console.log(cc.getSaldo());
// cc.getSaldo = function () {
//   return this["saldo"] + 7000;
// };
// console.log(cc.getSaldo());
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
/*
  Decorator de atributos
*/
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get() {
            return alvo["_" + nomePropriedade];
        },
        set(valor) {
            if (valor < 0) {
                throw new Error("Saldo inválido!");
            }
            alvo["_" + nomePropriedade] = valor;
        },
    });
}
/*
  Decorator de Parametro
*/
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`I: ${indiceParam}`);
}
//# sourceMappingURL=decorators.js.map