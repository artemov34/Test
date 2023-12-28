export class Item {
  constructor(
    public id: string,
    public int: number,
    public float: number,
    public color: string,
    public child: Pick<Item, 'id' | 'color'>
  ) {}
}
