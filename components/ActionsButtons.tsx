"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { db } from "@/lib/db";
import { mutate } from "swr";

type Props = {};

export default function ActionsButtons({}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const regex = /\/tank\/(\d+)/;

  const handleClick = async () => {
    const match = regex.exec(pathname);
    const id = match ? parseInt(match[1]) : 0;
    await db.tanks.delete(id);
    router.push("/");
    // mutate("tanks");
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
        <nav className="flex items-center">
          <Link role="button" href="/new" className="text-sm btn btn-ghost">
            <PlusIcon className="h-6 w-6" />
          </Link>
        </nav>
      )}

      {/* Put this part before </body> tag */}
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
    </div>
  );
}
