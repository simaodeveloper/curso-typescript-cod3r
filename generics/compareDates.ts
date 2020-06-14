abstract class BinaryOperation<N, S> {
  constructor(public date1: N, public date2: N) {}

  abstract execute(): S;
}

class Data {
  constructor(public dia: number, public mes: number, public ano: number) {}
}

class CompareDates extends BinaryOperation<Data, string> {
  getTime(data: Data) {
    const { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  execute(): string {
    const d1 = this.getTime(this.date1);
    const d2 = this.getTime(this.date2);
    const dia = 1000 * 60 * 60 * 24;
    return `${Math.ceil(Math.abs(d1 - d2) / dia)} dia(s)`;
  }
}

const cd = new CompareDates(new Data(13, 6, 2020), new Data(10, 6, 2020));

console.log(cd.execute());
