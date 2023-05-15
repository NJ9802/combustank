import React from "react";
import StockCalculator from "@/components/StockCalculator";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  return ["1", "2", "3", "4"];
}

export default function page({ params }: Props) {
  const { id } = params;
  const stock = 5000;

  return (
    <div className="px-5 max-w-lg mx-auto pt-8 flex flex-col justify-center items-center space-y-10">
      <div
        className="w-full flex px-5 py-10 flex-col justify-center items-center bg-base-200
         rounded-lg text-base-content"
      >
        <h4 className="text-lg font-semibold pb-14">Villa Cuba</h4>
        <div className="flex">
          <p className="mr-1">{`Existencia: ${stock}`}</p>
          <span className="font-bold">lts</span>
        </div>
        <StockCalculator />
      </div>
    </div>
  );
}
