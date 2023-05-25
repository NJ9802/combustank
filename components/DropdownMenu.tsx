"use client";
import { Bars3BottomLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type Props = {};

export default function DropdownMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="flex items-center">
        {pathname !== "/" && (
          <Link role="button" href="/" className="text-sm btn btn-ghost">
            <HomeIcon className="h-6 w-6" />
          </Link>
        )}
        <label className="btn btn-ghost swap swap-rotate">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <Bars3BottomLeftIcon className="h-6 w-6 swap-off fill-current" />
          <XMarkIcon className="h-6 w-6 swap-on fill-current" />
        </label>
      </div>

      <nav className={`${isOpen ? "" : "hidden"} absolute right-3`}>
        <ul
          onClick={() => setIsOpen(false)}
          tabIndex={0}
          className="menu bg-base-300  text-base-content dropdown-content p-2 shadow rounded-box w-52 mt-4"
        >
          <li>
            <Link href="/new" className="text-sm">
              <PlusIcon className="h-6 w-6" />
              Agregar Tanque
            </Link>
          </li>
          <li>
            <Link href="/delete" className="text-sm text-red-500">
              <TrashIcon className="h-6 w-6" />
              Eliminar Tanque
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
