import React from "react";
import StockCalculator from "@/components/StockCalculator";
import prisma from "@/lib/prisma";

type Props = { params: { id: string } };

export default async function page({ params }: Props) {
  const tank = await prisma.tank.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      name: true,
      averageLength: true,
      averageHeight: true,
      stock: true,
    },
  });

  const stock = tank?.stock;

  return (
    <div className="px-5 max-w-lg mx-auto pt-8 flex flex-col justify-center items-center space-y-10">
      <div
        className="w-full flex px-5 py-10 flex-col justify-center items-center bg-base-200
         rounded-lg text-base-content"
      >
        <h4 className="text-lg font-semibold pb-14">{tank?.name}</h4>
        <div className="flex">
          <p className="mr-1">{`Existencia: ${stock}`}</p>
          <span className="font-bold">lts</span>
        </div>
        {!!tank && <StockCalculator tank={tank} />}
      </div>
    </div>
  );
}
