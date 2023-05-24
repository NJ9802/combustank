import TankModel from "@/models/Tank";

export default function tankConstructor(tank: {
  name: string;
  averageLength: number;
  averageHeight: number;
  stock: number;
}) {
  return new TankModel(tank.averageLength, tank.averageHeight, tank.stock);
}
