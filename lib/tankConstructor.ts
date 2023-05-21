import TankModel from "@/models/Tank";
import { Tank } from "@prisma/client";

export default function tankConstructor(tank: {
  name: string;
  averageLength: number;
  averageHeight: number;
  stock: number;
}) {
  return new TankModel(tank.averageLength, tank.averageHeight, tank.stock);
}
