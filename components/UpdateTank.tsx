"use client";
import React from "react";
import StockCalculator from "@/components/StockCalculator";
import { db } from "@/lib/db";
import useSWR from "swr";
import Spinner from "./Spinner";

type Props = { id: string };

export default function UpdateTank({ id }: Props) {
  const fetchTank = async () => {
    const tank = await db.tanks.get(parseInt(id));
    return tank;
  };

  const { data: tank, error, isLoading } = useSWR("tank", fetchTank);

  if (error) return <div>Error al cargar los datos</div>;

  if (isLoading) return <Spinner />;

  return (
    <div className="px-5 max-w-lg mx-auto pt-8 flex flex-col justify-center items-center space-y-10">
      <div
        className="w-full flex px-5 py-5 flex-col justify-center items-center bg-base-200/50
     rounded-lg text-base-content"
      >
        <h4 className="text-lg font-semibold pb-5 underline decoration-secondary decoration-2">
          {tank?.name}
        </h4>
        <div className="flex">
          <p className="mr-1">{`Existencia: ${tank?.stock}`}</p>
          <span className="font-bold">lts</span>
        </div>
        {!!tank && <StockCalculator tank={tank} />}
      </div>
    </div>
  );
}
