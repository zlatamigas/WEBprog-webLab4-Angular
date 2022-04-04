export class Good {

  static counter: number = 1;
  id: number;

  constructor(
    public name: string,
    public price: number,
    public description?: string
  ) {
    this.id = Good.counter++;
  }
}
