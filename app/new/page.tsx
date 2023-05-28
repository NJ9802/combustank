import AddTankForm from "@/components/AddTankForm";
import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function page({}: Props) {
  return (
    <section>
      <div className="px-5 max-w-lg mx-auto pt-4 flex flex-col justify-center items-center">
        <div
          className="w-full flex px-5 py-6 flex-col justify-center items-center bg-base-200/50
        rounded-lg text-base-content"
        >
          <div className="flex w-full justify-evenly md:justify-center md:space-x-5 items-center font-semibold pb-6">
            <h4>Introduzca los datos del Tanque</h4>

            {/* The button to open modal */}
            <label htmlFor="my-modal" className="cursor-pointer animate-pulse">
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </label>
          </div>
          <AddTankForm />
        </div>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Dónde se obtienen los datos?</h3>
          <div className="py-4 space-y-3">
            <p>
              Los datos del tanque solicitados se encuentran en la{" "}
              <span className="font-semibold">Tabla de Aforo</span> del
              recipiente, emitida por el Departamento de Metrología de las
              Oficinas Territoriales de Normalización.
            </p>
            <p>
              {`"Medición" y "Existencia" hacen referencia a la medición actual de la vara en centímetros
                 y a la existencia actual del recipiente en litros.`}
            </p>
            <p className="font-semibold">
              Es necesario llenar todos los campos.
            </p>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-accent">
              Entendido
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
