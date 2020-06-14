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
let str: string = "Daniel";
let yearOld: number = 29;
let bool: boolean = false;

// type: Array
// create a list of strings
let stringList: string[] = ["1", "2", "3"];

// create a list of numbers
let numberList: number[] = [1, 2, 3];

// or any
let anyList: any[] = ["1", 2, true];

// type: Tuple
// create a tuple with a string and number
let tuple: [string, number] = ["Street", 55];

// type: Enums
enum Color {
  Grey,
  Green = 100,
  Blue = 10,
  Orange,
  Yellow,
  Red = 100,
}

let myColor: Color = Color.Green;

// Type: any
let car: any = "BMW";
car = { brand: "BMW", year: "2019" };

// Function types on parameters and return
function getName(): string {
  return nome;
}

console.log(getName());

function sayHi(): void {
  console.log("Hi");
  // return age;
}

sayHi();

function multiply(nA: number, nB: number): number {
  return nA * nB;
}

console.log(multiply(5, 10));

// type: Function
// you can put any alias for parameters
let calculate: (x: number, y: number) => number;

calculate = multiply;

console.log(calculate(3, 3));

// type: Object
let user: { name: string; age: number } = {
  name: "Daniel",
  age: 29,
};

/* Challenge 1 */
type Employee = {
  supervisors: string[];
  startWork: (hours: number) => string;
};

// 1
let employee: Employee = {
  supervisors: ["Daniel", "Leonardo", "Juliana"],
  startWork(hours: number): string {
    if (hours <= 8) {
      return "Ponto normal";
    }

    return "Fora do horário";
  },
};

let employee2: Employee = {
  supervisors: ["Daniel", "Leonardo", "Juliana"],
  startWork(hours: number): string {
    if (hours <= 8) {
      return "Ponto normal";
    }

    return "Fora do horário";
  },
};

// Union Types
let nota: number | string = 10;

// type: Never
// When the function don't continue the flow
// for example throw an error or occur a infinit loop
function fail(msg: string): never {
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

let opcionalHeight: null | number = 12;

type Contact = {
  name: string;
  phone: string;
  cellphone: string | null;
};

const contact1: Contact = {
  name: "Fulano",
  phone: "4561324567",
  cellphone: null,
};

// Challenge 2
type AccountType = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: AccountType = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: AccountType;
  contatos: string[];
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
