"use client";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import AddTankInput from "./AddTankInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { db } from "@/lib/db";

type Props = {};

export type Input = {
  name: string;
  averageLength: string;
  averageHeight: string;
  capacity: string;
  measurement: string;
  stock: string;
};

export default function AddTankForm({}: Props) {
  const { register, handleSubmit } = useForm<Input>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const { name, averageLength, averageHeight, capacity, measurement, stock } =
      data;
    try {
      const id = await db.tanks.add({
        name,
        averageLength: parseFloat(averageLength),
        averageHeight: parseFloat(averageHeight),
        capacity: parseFloat(capacity),
        measurement: parseFloat(measurement),
        stock: parseFloat(stock),
      });
    } catch (error) {
      console.log(error);
    }
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col space-y-5"
    >
      <div className="flex flex-col items-center">
        <label htmlFor="tankName">Nombre del Tanque:</label>
        <input
          {...register("name", { required: true })}
          id="tankName"
          type="text"
          className="mr-1 px-1 text-center outline-none rounded-sm border border-secondary
    transition-all focus:border-accent"
        />
      </div>
      <AddTankInput
        title="Largo Promedio"
        placeholder="5.41"
        unit="m"
        id="averageLength"
        register={register}
      />
      <AddTankInput
        title="Altura Promedio"
        placeholder="2.11"
        unit="m"
        id="averageHeight"
        register={register}
      />
      <AddTankInput
        title="Capacidad (CAP)"
        placeholder="9.15"
        unit="m³"
        id="capacity"
        register={register}
      />
      <AddTankInput
        title="Medición"
        placeholder="68.4"
        unit="cm"
        id="measurement"
        register={register}
      />
      <AddTankInput
        title="Existencia"
        placeholder="5460"
        unit="lts"
        id="stock"
        register={register}
      />

      <div className="pt-5 text-center">
        <button className="btn mt-3 gap-2 btn-primary">
          <PlusIcon className="h-6 w-6" />
          Añadir
        </button>
      </div>
    </form>
  );
}
