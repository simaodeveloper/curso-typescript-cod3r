namespace Geometria {
  export namespace Area {
    const PI = 3.14016;

    export function circunferencia(radio: number): number {
      return PI * Math.pow(radio, 2);
    }
  }
}
