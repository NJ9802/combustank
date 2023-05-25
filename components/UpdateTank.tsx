"use client";
import React from "react";
import StockCalculator from "@/components/StockCalculator";
import { db } from "@/lib/db";
import useSWR from "swr";

type Props = {id:string};

export default function UpdateTank({id}: Props) {
  const fetchTank = async () => {
    const tank = await db.tanks.get(parseInt(id));
    return tank;
  };

  const { data: tank, error, isLoading } = useSWR("tank", fetchTank);

  if (error) return <div>Error al cargar los datos</div>;

  if (isLoading)
    return (
      <div className="pt-0 flex h-[calc(100vh-248px)] justify-center items-center">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );

  return (
    <div className="px-5 max-w-lg mx-auto pt-8 flex flex-col justify-center items-center space-y-10">
      <div
        className="w-full flex px-5 py-10 flex-col justify-center items-center bg-base-200
     rounded-lg text-base-content"
      >
        <h4 className="text-lg font-semibold pb-14">{tank?.name}</h4>
        <div className="flex">
          <p className="mr-1">{`Existencia: ${tank?.stock}`}</p>
          <span className="font-bold">lts</span>
        </div>
        {!!tank && <StockCalculator tank={tank} />}
      </div>
    </div>
  );
}
