function logarClasse(constructor: Function) {
  console.log(constructor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string; b?: number }) {
  return function (_: Function): void {
    console.log(obj.a + " " + obj.b);
  };
}

type Constructor = {
  new (...args: any[]): {};
};

function logarObjeto(constructor: Constructor) {
  console.log("carregando...");
  return class extends constructor {
    constructor(...args: any[]) {
      console.log("antes...");
      super(...args);
      console.log("depois...");
    }
  };
}

// Adicionando novos métodos

interface Eletrodomestico {
  imprimir?(): void;
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

function imprimivel(constructor: Function) {
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

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
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
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(@paramInfo valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo.toFixed(2);
  }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5000);
console.log(cc.getSaldo());

// cc.getSaldo = function () {
//   return this["saldo"] + 7000;
// };

// console.log(cc.getSaldo());

function congelar(
  alvo: any,
  nomePropriedade: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
}

/*
  Decorator de atributos
*/
function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get(): any {
      return alvo["_" + nomePropriedade];
    },
    set(valor: any): void {
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

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Método: ${nomeMetodo}`);
  console.log(`I: ${indiceParam}`);
}
