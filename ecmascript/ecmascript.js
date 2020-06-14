"use strict";
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = (nome = "Pessoa") => console.log("Ola, " + nome);
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20];
array.push(...nums);
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [n1, n2, n3] = notas;
console.log(n1, n2, n3);
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=ecmascript.js.map