function echo(object: any) {
  return object;
}

console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ name: "João", age: 27 }).length);

/*
  Generics
*/
function echoSmart<T>(object: T): T {
  return object;
}

console.log(echoSmart("João").length);
console.log(echoSmart<number>(27));
console.log(
  echoSmart<object>({ name: "João", age: 27 })
);

/*
  With Arrays
*/
const avalicacoes: Array<number> = [10, 9.3, 7.7];
avalicacoes.push(8.4);
// avalicacoes.push("5.5");
console.log(avalicacoes);

function imprimir<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["1", "2", "3"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "Fulano", idade: 22 },
  { nome: "Cicrano", idade: 23 },
  { nome: "Beltrano", idade: 24 },
]);

type Aluno = {
  nome: string;
  idade: number;
};

imprimir<Aluno>([
  { nome: "Fulano", idade: 22 },
  { nome: "Cicrano", idade: 23 },
  { nome: "Beltrano", idade: 24 },
]);

/*
  With Function
*/
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoSmart;
console.log(chamarEcho<string>("Alguma coisa"));

/*
  With Classes
*/
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, "Opa").executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());

/*
  Desafio Classe Fila
  Atributo: fila (Array)
  métodos: entrar, proximo, imprimir
*/

class Fila<T extends number | string> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(value: T): void {
    this.fila.push(value);
  }

  proximo(): T | null {
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

const fila = new Fila<string>("Gui", "Pedro", "Ana", "Lu");

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

const novaFila = new Fila<number>(1, 2, 3);
novaFila.imprimir();

/*
  Desafio Mapa
  Array de Objetos (Chave/Valor) -> itens
  Métodos: obter(chave), colocar({ c, v })
  limpar(), imprimir()
*/

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
  private itens: Array<Par<C, V>> = [];

  constructor(...args: Par<C, V>[]) {
    this.itens = args;
  }

  obter(chave: C) {
    const elemento = this.itens.filter((item) => item.chave === chave);
    return elemento ? elemento[0] : null;
  }

  colocar(item: Par<C, V>) {
    const elemento = this.obter(item.chave);
    if (elemento) {
      elemento.valor = item.valor;
    } else {
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

const mapa = new Mapa<number, string>();

mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log();
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
