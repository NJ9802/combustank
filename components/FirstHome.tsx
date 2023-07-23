import Image from "next/image";
import Link from "next/link";
import React from "react";
import picture from "@/public/installSugestion.svg";

type Props = {};

export default function FirstHome({}: Props) {
  return (
    <div className="py-6 h-full flex justify-center items-center space-x-20">
      <div className="px-5 max-w-2xl flex flex-col justify-center items-center space-y-10 text-center">
        <h3 className="text-xl md:text-3xl font-bold">
          ¡Bienvenido a CombusTank!
        </h3>
        <div className="flex flex-col lg:text-xl items-center space-y-5">
          <p>
            Descubre <span className="font-semibold">CombusTank</span>, una
            aplicación diseñada para simplificar el cálculo de la cantidad de
            combustible en{" "}
            <span className="font-semibold">
              tanques cilíndricos horizontales con cabezas planas
            </span>
            .{" "}
          </p>
          <p>
            Es una{" "}
            <span className="underline decoration-accent">herramienta</span>{" "}
            perfecta para aquellos que buscan una{" "}
            <span className="font-semibold">solución eficiente y sencilla</span>{" "}
            para esta labor.
          </p>
          <p>¡No esperes más y añade el primer Tanque!</p>
          <p className="font-bold">
            Para una mejor experiencia pruebe instalar la aplicación en su móvil
            desde las opciones del navegador.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/new" role="button" className="btn btn-primary">
            Comenzar
          </Link>
        </div>
      </div>
      <div className="hidden pr-24 md:block">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <Image alt="Tanque cilindrico horizontal" src={picture} />
          </div>
        </div>
      </div>
    </div>
  );
}
