import FirstHome from "@/components/FirstHome";
import Tank from "@/components/Tank";
import Link from "next/link";
import React from "react";

type Props = {};

export const revalidate = 0;

export default async function page({}: Props) {

  const tanks:number[] = []

  return (
    <section>
      {tanks.length === 0 ? (
        <FirstHome />
      ) : (
        <div className="px-5 pt-10 flex flex-col justify-center items-center space-y-10">
          <h4 className="text-md font-bold">Seleccione el Tanque a Calcular</h4>

          <div
            className="w-full md:max-w-lg flex flex-col pb-2 pr-2 space-y-5 max-h-[calc(100vh-25rem)] lg:max-h-[calc(100vh-15rem)]
          overflow-y-scroll"
          >
            {tanks.map((tank) => (
              <Link href={`/tank/${tank.id}`} key={tank.id}>
                <Tank tank={tank} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
