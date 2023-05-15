"use client";
import { Bars3BottomLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function DropdownMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <label className="btn btn-ghost swap swap-rotate">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <Bars3BottomLeftIcon className="h-6 w-6 swap-off fill-current" />
        <XMarkIcon className="h-6 w-6 swap-on fill-current" />
      </label>

      <nav className={`${isOpen ? "" : "hidden"} absolute right-3`}>
        <ul
          onClick={() => setIsOpen(false)}
          tabIndex={0}
          className="menu bg-base-200  text-base-content dropdown-content p-2 shadow rounded-box w-52 mt-4"
        >
          <li>
            <Link href="/new" className="text-sm">
              <PlusIcon className="h-6 w-6" />
              Agregar Tanque
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm">
              <HomeIcon className="h-6 w-6" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm">
              <ArrowRightOnRectangleIcon className="h-6 w-6 " />
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
