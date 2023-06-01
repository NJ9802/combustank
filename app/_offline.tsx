"use client";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Offline({}: Props) {
  return (
    <div className="flex px-5 flex-col m-auto justify-center items-center">
      <figure className="flex flex-col items-center">
        <Image
          src="/offlinePicture.svg"
          alt="Offline Picture"
          width={250}
          height={250}
        />
        <figcaption>
          <a
            className="text-xs underline decoration-slice"
            href="https://storyset.com/web"
          >
            Web illustrations by Storyset
          </a>
        </figcaption>
      </figure>
      <h4 className="text-xl mt-10 text-center font-bold">
        Ups! Parece que no tiene conexión a Internet, compruebe su conexión y
        vuelva a intentarlo.
      </h4>
      <button
        className="btn btn-primary mt-16"
        onClick={() => window.location.reload()}
      >
        Reintentar
      </button>
    </div>
  );
}
