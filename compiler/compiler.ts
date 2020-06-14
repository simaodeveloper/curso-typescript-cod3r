/*
  Testing noEmitOnError

  true: when encounter some error the TS will not compile
 */
let newName = "Daniel";

// newName = 100;
newName = "John";

/*
  Verify unused Locals and Parameters
*/

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(10, 5));

/*
  Verify strictNullChecks
*/

function greet(isMorning: boolean): string {
  let msg: string;

  if (isMorning) {
    msg = "Good morning!";
  } else {
    msg = "Have a good day!";
  }

  return msg;
}

greet(true);
