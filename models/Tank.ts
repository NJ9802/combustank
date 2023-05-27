export default class Tank {
  constructor(
    public averageLength: number,
    public averageHeight: number,
    public stock: number
  ) {}

  calculateVolume(measurement: number, decimals: number) {
    const height = measurement / 100;
    const radius = this.averageHeight / 2;

    const segment1 = (radius - height) / radius;
    const root = 2 * radius * height - height ** 2;
    const segment2 = (radius - height) * Math.sqrt(root);
    const area = Math.acos(segment1) * radius ** 2 - segment2;

    const volume = area * this.averageLength * 1000;
    return Math.round(volume * 10 ** decimals) / 10 ** decimals;
  }
}
