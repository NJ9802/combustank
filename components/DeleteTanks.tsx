"use client";

import { db, type Tank } from "@/lib/db";
import { fetchTanks } from "@/lib/tanksFetcher";
import React from "react";
import useSWR, { mutate } from "swr";
import TankComponent from "./Tank";
import Skeleton from "./Skeleton";
import { useRouter } from "next/navigation";

type Props = {};

export default function DeleteTanks({}: Props) {
  const { data: tanks, error, isLoading } = useSWR<Tank[]>("tanks", fetchTanks);

  const router = useRouter();

  const handleClick = async (id: number) => {
    await db.tanks.delete(id);
    mutate("tanks");
  };

  if (error) return <div>Error al cargar los datos</div>;

  if (isLoading) return <Skeleton />;

  if (tanks?.length === 0) {
    router.push("/");
  }

  return (
    <div
      className="w-full md:max-w-lg flex flex-col pb-2 pr-2 space-y-5
      max-h-[calc(100vh-25rem)] lg:max-h-[calc(100vh-15rem)]
    overflow-y-scroll"
    >
      {tanks?.map((tank) => (
        <div key={tank.id}>
          <a href={`#modal${tank.id}`}>
            <TankComponent tank={tank} />
          </a>
          {/* Put this part before </body> tag */}
          <div className="modal" id={`modal${tank.id}`}>
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirmación</h3>
              <p className="py-4">
                Esta seguro que desea eliminar el tanque{" "}
                <span className="font-semibold underline decoration-accent">
                  {tank.name}
                </span>
              </p>
              <div className="modal-action">
                <a href="#" className="btn">
                  Cancelar
                </a>
                <a
                  href="#"
                  onClick={() => {
                    handleClick(tank.id as number);
                  }}
                  className="btn btn-error"
                >
                  Eliminar
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
