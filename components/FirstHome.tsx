import Image from "next/image";
import Link from "next/link";
import React from "react";
import picture from "@/public/picture.jpeg";


type Props = {};

export default function FirstHome({}: Props) {
  return (
    <div className="py-6 h-full flex justify-center items-center space-x-20">
      <div className="px-5 max-w-2xl flex flex-col justify-center items-center space-y-10 text-center">
        <h3 className="text-xl font-bold">¡Bienvenido a CombusTank!</h3>
        <div className="flex flex-col items-center text-justify space-y-5">
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
        </div>
        <div className="flex justify-center items-center">
          <Link href="/new" role="button" className="btn btn-primary">
            Comenzar
          </Link>
        </div>
      </div>
      <div className="hidden pr-24 md:block">
        <Image
          className="w-auto h-auto rounded-lg shadow-md"
          alt="Tanque cilindrico horizontal"
          src={picture}
        />
      </div>
    </div>
  );
}
