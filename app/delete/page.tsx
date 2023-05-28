import DeleteTanks from "@/components/DeleteTanks";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <section className="mx-auto w-full flex-1">

    <div className="px-5 pt-10 flex flex-col justify-center items-center space-y-10">
      <h4 className="text-md font-bold">
        Seleccione el Tanque a <span className="text-error">Eliminar</span>
      </h4>
      <DeleteTanks />
    </div>
    </section>
  );
}
