"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { db } from "@/lib/db";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function ActionsButtons({}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const regex = /\/tank\/(\d+)/;

  const socials = [
    "https://twitter.com/nj9802",
    "https://t.me/nelsonjavier9802",
    "https://github.com/nj9802",
    "mailto:nelson.javier.aldazabal@gmail.com",
  ];

  const handleClick = async () => {
    const match = regex.exec(pathname);
    const id = match ? parseInt(match[1]) : 0;
    await db.tanks.delete(id);
    router.push("/");
  };

  return (
    <div className="flex items-center">
      {pathname !== "/" ? (
        regex.test(pathname) ? (
          <>
            <a href="#deleteModal" className="text-sm btn btn-ghost">
              <TrashIcon className="h-6 w-6" />
            </a>
            <nav>
              <Link role="button" href="/" className="text-sm btn btn-ghost">
                <HomeIcon className="h-6 w-6" />
              </Link>
            </nav>
          </>
        ) : (
          <nav>
            <Link role="button" href="/" className="text-sm btn btn-ghost">
              <HomeIcon className="h-6 w-6" />
            </Link>
          </nav>
        )
      ) : (
        <>
          <nav className="flex items-center">
            <Link role="button" href="/new" className="text-sm btn btn-ghost">
              <PlusIcon className="h-6 w-6" />
            </Link>
          </nav>
          <a href="#infoModal" className="text-sm btn btn-ghost">
            <InformationCircleIcon className="h-6 w-6" />
          </a>
        </>
      )}

      <div className="modal" id="deleteModal">
        <div className="modal-box text-base-content">
          <h3 className="font-bold text-lg">Confirmación</h3>
          <p className="py-4">¿Esta seguro que desea eliminar el tanque? </p>
          <div className="modal-action">
            <a href="#" className="btn">
              Cancelar
            </a>
            <a href="#" onClick={handleClick} className="btn btn-error">
              Eliminar
            </a>
          </div>
        </div>
      </div>
      
      <div className="modal" id="infoModal">
        <div className="modal-box text-base-content text-justify">
          <h3 className="font-bold text-lg">Acerca de CombusTank</h3>
          <hr />
          <p className="py-4">
            CombusTank es una aplicación de código abierto, diseñada para
            simplificar el cálculo de la cantidad de combustible en tanques
            cilíndricos horizontales con cabezas planas.
          </p>
          <p className="py-4">
            Desarrollada por{" "}
            <a
              href="https://cucoders.dev/dev/NJ9802/"
              className="underline decoration-neutral font-bold"
            >
              Nelson Javier Aldazabal
            </a>{" "}
            con el objetivo de proveer una herramienta capaz de agilizar labores
            cotidianas a esas personas que gestionan este tipo de recipientes.
          </p><hr />
          <div className="grid-flow-col gap-4">
            {socials.map((social) => (
              <SocialIcon
                key={social}
                url={social}
                fgColor="gray"
                bgColor="transparent"
              />
            ))}
          </div>
          <hr />
          <div className="modal-action">
            <a href="#" className="btn btn-accent">
              Entendido
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
