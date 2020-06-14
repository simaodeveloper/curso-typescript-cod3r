"use strict";
class BinaryOperation {
    constructor(date1, date2) {
        this.date1 = date1;
        this.date2 = date2;
    }
}
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class CompareDates extends BinaryOperation {
    getTime(data) {
        const { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    execute() {
        const d1 = this.getTime(this.date1);
        const d2 = this.getTime(this.date2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(Math.abs(d1 - d2) / dia)} dia(s)`;
    }
}
const cd = new CompareDates(new Data(13, 6, 2020), new Data(10, 6, 2020));
console.log(cd.execute());
//# sourceMappingURL=compareDates.js.map