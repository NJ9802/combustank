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
    <div className="px-5 max-w-lg mx-auto py-4 flex flex-col justify-center items-center space-y-10">
      <div
        className="w-full flex px-5 py-5 flex-col justify-center items-center bg-base-200/50
     rounded-lg text-base-content"
      >
        <h4 className="text-lg font-semibold">{tank?.name}</h4>
        <hr className="w-full" />
        <div className="flex my-3">
          <p className="mr-1">{`Existencia Anterior: ${tank?.stock}`}</p>
          <span className="font-bold">lts</span>
        </div>
        <hr className="w-full" />
        {!!tank && <StockCalculator tank={tank} />}
      </div>
    </div>
  );
}
