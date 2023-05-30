"use client";

import FirstHome from "@/components/FirstHome";
import TankComponent from "@/components/Tank";
import { Tank } from "@/lib/db";
import { fetchTanks } from "@/lib/tanksFetcher";
import Link from "next/link";
import useSWR from "swr";

import React from "react";
import Spinner from "./Spinner";

type Props = {};

export default function Home({}: Props) {
  const { data: tanks, error, isLoading } = useSWR<Tank[]>("tanks", fetchTanks);

  if (error) return <div>Error al cargar los datos</div>;
  if (isLoading) return <Spinner />;

  return (
    <section className="flex-1">
      {tanks?.length === 0 ? (
        <FirstHome />
      ) : (
        <div className="px-5 pt-10 flex flex-col justify-center items-center space-y-10">
          <h4 className="text-md font-bold">Seleccione el Tanque a Calcular</h4>

          <div
            className="w-full md:max-w-lg flex flex-col pb-2 pr-2 space-y-5 max-h-[calc(100vh-11rem)] lg:max-h-[calc(100vh-17rem)]
        overflow-y-scroll"
          >
            {tanks?.map((tank) => (
              <Link href={`/tank/${tank.id}`} key={tank.id}>
                <TankComponent tank={tank} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
