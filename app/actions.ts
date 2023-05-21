"use server";
import prisma from "@/lib/prisma";
import { Input } from "@/components/AddTankForm";
import { revalidatePath } from "next/cache";

export async function createTank(formData: Input, userId: string) {
  const { name } = formData;

  const averageLength = parseFloat(formData.averageLength);
  const averageHeight = parseFloat(formData.averageHeight);
  const capacity = parseFloat(formData.capacity);
  const measurement = parseFloat(formData.measurement);
  const stock = parseFloat(formData.stock);

  try {
    const result = await prisma.tank.create({
      data: {
        name,
        averageLength,
        averageHeight,
        capacity,
        measurement,
        stock,
        adminId: userId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function updateTank(
  id: string,
  stock: number,
  measurement: number
) {
  try {
    const result = await prisma.tank.update({
      where: { id },
      data: { stock, measurement },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
